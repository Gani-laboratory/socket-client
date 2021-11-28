import { createContext, ReactNode, useContext } from "react"
import useLocalStorage from "../Hooks/LocalStorage"

const contactContext = createContext({ contacts: [{ id: "", username: "" }], createContact: ({ id, username }: { id: string; username: string }) => {} })

export function useContact() {
  return useContext<Contact>(contactContext)
}

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [contacts, setContact] = useLocalStorage("contacts", [])
  const createContact = ({ id, username }: { id: string; username: string }) => {
    return setContact((prevContact: any) => {
      return [...prevContact, { id, username }]
    })
  }

  return <contactContext.Provider value={{ contacts, createContact }}>{children}</contactContext.Provider>
}

export interface Contact {
  contacts: { id: string; username: string }[]
  createContact: ({ id, username }: { id: string; username: string }) => any
}
