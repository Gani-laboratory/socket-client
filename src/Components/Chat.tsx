import { KeyboardEventHandler, MouseEventHandler, useState } from "react"
import User from "../Assets/profile.jpg"
import { useChat } from "../Contexts/Chat.provider"
import { useContact } from "../Contexts/Contact.provider"
import { useSocket } from "../Contexts/Socket.provider"
import useLocalStorage from "../hooks/LocalStorage"
import ModalBox from "./ModalBox"

export default function Chat() {
  const { contact, createContact } = useContact()
  const { chats, updateChats } = useChat()
  const [user] = useLocalStorage("user")
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState("")
  const [name, setName] = useState("")

  const socket = useSocket()

  const handleMsg: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.code === "Enter") {
      const message = ev.currentTarget.value
      const from = user.id
      socket.emit("send", { message, from })
      updateChats({ message, from })
      ev.currentTarget.value = ""
    }
  }

  const handleContact: MouseEventHandler<HTMLButtonElement> = (ev) => {
    if (id) {
      ev.preventDefault()
      createContact({ id, username: name })
    }
    setIsOpen(false)
  }

  // if (socket) {
  //   socket.on("receive", (args) => {
  //     updateChats({ message: args.message, from: args.from })
  //   })
  // }

  return (
    <>
      <ModalBox isOpen={isOpen} setIsOpen={setIsOpen} handleContact={handleContact} setId={setId} setName={setName} />
      <div className="flex gap-5 p-5 ml-16">
        <div className="flex flex-col justify-between w-3/4 gap-2 h-100">
          <div className="flex flex-col font-poppins bg-gray-900 h-full rounded-md p-1 overflow-auto">
            <div className="flex flex-col justify-center items-center self-center my-2">
              <small className="text-gray-100 px-1">{new Date().toLocaleDateString("en", { month: "long", year: "numeric", day: "numeric" })}</small>
              <hr className="w-full" />
            </div>
            {/* class for partner -> { self-start flex-row-reverse } */}
            {!!chats.length &&
              chats.map((chat, i) => (
                <div key={i} className={`flex items-end ${chat.from === user.id ? "self-end" : "self-start flex-row-reverse"} gap-3 mb-4 w-8/12 justify-end`}>
                  <p className="bg-gray-100 border-2 p-1 rounded">{chat.message}</p>
                  <img className="rounded-full" src={User} alt="Yagami" width={35} height={35} />
                </div>
              ))}
          </div>
          <input className="w-full rounded-full border-2 p-2 px-4 focus:outline-none" type="text" placeholder="Write a message..." onKeyUp={handleMsg} />
        </div>
        <div className="flex flex-col justify-between w-1/4 font-ubuntu bg-indigo-200 rounded-md h-100">
          <div className="overflow-auto">
            <div className="flex w-full justify-between text-white bg-indigo-600 text-center cursor-pointer rounded-t-md">
              <h3 className="p-5 w-full border-r">Chats</h3>
              <h3 className="p-5 w-full border-l">Groups</h3>
            </div>
            <div className="flex flex-col gap-3 md:p-5 p-1 text-white">
              {contact.length ? (
                contact.map((val) => (
                  <div className="flex gap-2 items-center bg-indigo-600 rounded-md hover:bg-indigo-700 cursor-pointer" key={val.id}>
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
