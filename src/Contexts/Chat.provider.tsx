import { createContext, ReactNode, useContext } from "react"
import useLocalStorage from "../hooks/LocalStorage"

const chatContext = createContext({ chats: [{ message: "", from: "" }], updateChats: ({ message, from }: any) => {} })

export function useChat() {
  return useContext<Chat>(chatContext)
}

export default function ChatProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useLocalStorage("chats", [])
  const updateChats = ({ message, from }: any) => {
    return setChats((prevChat: []) => [...prevChat, { message, from }])
  }

  return <chatContext.Provider value={{ chats, updateChats }}>{children}</chatContext.Provider>
}

export interface Chat {
  chats: { message: string; from: string }[]
  updateChats: ({ message, from }: { message: string; from: string }) => any
}
