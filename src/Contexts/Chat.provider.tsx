import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { user } from "../Components/App"
import useLocalStorage from "../Hooks/LocalStorage"
import { useContact } from "./Contact.provider"
import { useSocket } from "./Socket.provider"

const chatContext = createContext<any>({})

export function useChat() {
  return useContext(chatContext)
}

export default function ChatProvider({ user, children }: { user: user; children: ReactNode }) {
  const [chats, setChats] = useLocalStorage<chats>("chats", [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
  const { contacts, createContact } = useContact()
  const socket = useSocket()

  function createConversation(recipients: string[]) {
    setChats((prevConversations: chats) => {
      return [...prevConversations, { recipients, messages: [] }]
    })
  }

  const addMsgToConversation = useCallback(
    ({ recipients, text, sender, username }) => {
      setChats((prevChats: chats) => {
        let madeChange = false
        const newMessage = { sender, text }
        const newConversations = prevChats.map((conversation) => {
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            }
          }

          return conversation
        })
        if (madeChange) {
          return newConversations
        } else {
          createContact({ id: sender, username })
          return [...prevChats, { recipients, messages: [newMessage] }]
        }
      })
    },
    [setChats]
    // [createContact, setChats]
  )

  useEffect(() => {
    if (socket == null) return

    socket.on("receive", addMsgToConversation)

    // return () => socket.off('receive')
  }, [socket, addMsgToConversation])

  function sendMessage(recipients: string[], text: string) {
    socket.emit("send", { recipients, text, username: user.username })

    addMsgToConversation({ recipients, text, sender: user.id, username: user.username })
  }

  const formattedChat = (chats as chats).map((chat, index) => {
    const recipients = chat.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient
      })
      const name = (contact && contact.username) || recipient
      return { id: recipient, name }
    })

    const messages = chat.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender
      })
      const name = (contact && contact.username) || user.username
      const fromMe = user.id === message.sender
      return { ...message, senderName: name, fromMe }
    })

    const selected = index === selectedConversationIndex
    return { ...chat, messages, recipients, selected }
  })
  const value = {
    chats: formattedChat,
    createConversation,
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    selectedConversation: formattedChat[selectedConversationIndex],
  }

  return <chatContext.Provider value={value}>{children}</chatContext.Provider>
}

export type chats = { messages: [{ sender: string; text: string }]; recipients: string[] }[]

export interface Chat {
  chats: chats
  updateChats: ({ messages, sender }: { messages: string; sender: string }) => any
}
function arrayEquality(a: string[], b: string[]) {
  if (a.length !== b.length) return false

  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}
