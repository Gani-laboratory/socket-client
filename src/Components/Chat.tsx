import { KeyboardEventHandler, MouseEventHandler, useCallback, useState } from "react"
import User from "../Assets/profile.jpg"
import { useChat } from "../Contexts/Chat.provider"
import { useContact } from "../Contexts/Contact.provider"
import ModalBox from "./ModalBox"

export default function Chat() {
  const { contacts, createContact } = useContact()
  const { chats, sendMessage, selectedConversation, selectConversationIndex, createConversation } = useChat()
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])

  const handleMsg: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    setText(ev.currentTarget.value)
    if (ev.code === "Enter" && text) {
      sendMessage(
        selectedConversation.recipients.map((r: any) => r.id),
        text
      )
      ev.currentTarget.value = ""
    }
  }

  const handleContact: MouseEventHandler<HTMLButtonElement> = (ev) => {
    if (id) {
      ev.preventDefault()
      createContact({ id, username: name })
      createConversation([id])
    }
    setIsOpen(false)
  }

  return (
    <>
      <ModalBox isOpen={isOpen} setIsOpen={setIsOpen} handleContact={handleContact} setId={setId} setName={setName} />
      <div className={`flex p-5 ml-16 ${(contacts.length && chats.length) | chats.length ? "gap-5" : "justify-center"}`}>
        <div className={`flex flex-col justify-between w-3/4 gap-2 h-100 ${(contacts.length && chats.length) | chats.length ? "" : "hidden"}`}>
          <div className="flex flex-col font-poppins bg-gray-900 h-full rounded-md p-1 overflow-auto">
            <div className="flex flex-col justify-center items-center self-center my-2">
              <small className="text-gray-100 px-1">{new Date().toLocaleDateString("en", { month: "long", year: "numeric", day: "numeric" })}</small>
              <hr className="w-full" />
            </div>
            {selectedConversation &&
              selectedConversation.messages.map((message: any, index: any) => {
                const lastMessage = selectedConversation.messages.length - 1 === index
                return (
                  <div ref={lastMessage ? setRef : null} key={index} className={`flex items-end ${message.fromMe ? "self-end" : "self-start flex-row-reverse"} gap-3 mb-4 w-8/12 justify-end`}>
                    <p className="bg-gray-100 border-2 p-1 rounded">{message.text}</p>
                    <img className="rounded-full" src={User} alt={message.fromMe ? "You" : message.senderName} width={35} height={35} />
                  </div>
                )
              })}
          </div>
          <input className="w-full rounded-full border-2 p-2 px-4 focus:outline-none" type="text" placeholder="Write a message..." onKeyUp={handleMsg} />
        </div>
        <div className={`${(contacts.length && chats.length) | chats.length ? "w-1/4" : "w-3/5"} flex flex-col justify-between font-ubuntu bg-indigo-200 rounded-md h-100`}>
          <div>
            <div className="flex justify-between w-full text-white bg-indigo-600 text-center cursor-pointer rounded-t-md">
              <h3 className="p-5 w-full border-r">Chats</h3>
              <h3 className="p-5 w-full border-l">Groups</h3>
            </div>
            <div className="flex flex-col gap-3 md:p-5 p-1 text-white overflow-auto max-h-97">
              {contacts.length ? (
                contacts.map((val, i) => (
                  <div className={`flex gap-2 items-center bg-indigo-600 rounded-md hover:bg-indigo-700 cursor-pointer`} key={val.id} onClick={() => selectConversationIndex(i)}>
                    <img className="rounded-l-md" src={User} alt={val.username} width={60} height={60} />
                    <h4>{val.username}</h4>
                  </div>
                ))
              ) : (
                <p className="text-center p-1 rounded bg-indigo-600">Start by adding a new contact!</p>
              )}
            </div>
          </div>
          <button className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-b-md" onClick={() => setIsOpen(true)}>
            <i className="far fa-plus-hexagon"></i> New Contact
          </button>
        </div>
      </div>
    </>
  )
}
