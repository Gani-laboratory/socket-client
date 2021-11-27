import { createContext, ReactNode, useContext } from "react"
import useLocalStorage from "../Hooks/LocalStorage"

const contactContext = createContext({ contact: [{ id: "", username: "" }], createContact: ({ id, username }: { id: string; username: string }) => {} })

export function useContact() {
  return useContext<Contact>(contactContext)
}

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [contact, setContact] = useLocalStorage("contacts", [])
  const createContact = ({ id, username }: { id: string; username: string }) => {
    return setContact((prevContact: any) => {
      return [...prevContact, { id, username }]
    })
  }

  return <contactContext.Provider value={{ contact, createContact }}>{children}</contactContext.Provider>
}

export interface Contact {
  contact: { id: string; username: string }[]
  createContact: ({ id, username }: { id: string; username: string }) => any
}
