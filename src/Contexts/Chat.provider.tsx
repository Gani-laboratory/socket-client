import { createContext, ReactNode, useContext } from "react"
import useLocalStorage from "../hooks/LocalStorage"
import { useSocket } from "../Contexts/Socket.provider"

const chatContext = createContext({ chats: [{ message: "", from: "" }], sendMsg: ({ message, from }: any) => {} })

export function useChat() {
  return useContext<Chat>(chatContext)
}

export default function ChatProvider({ children }: { children: ReactNode }) {
  const socket = useSocket()
  const [chats, setChats] = useLocalStorage("chats", [])
  const sendMsg = ({ message, from }: any) => {
    socket.emit("send", { message, from })
    return setChats((prevChat: []) => [...prevChat, { message, from }])
  }

  const value = {
    chats,
    selectedChats: "",
    sendMsg,
    createConversation: "",
  }

  return <chatContext.Provider value={value}>{children}</chatContext.Provider>
}

export interface Chat {
  chats: { message: string; from: string }[]
  sendMsg: ({ message, from }: { message: string; from: string }) => any
}
