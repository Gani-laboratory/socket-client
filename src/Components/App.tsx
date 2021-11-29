import Auth from "./Auth"
import ChatProvider from "../Contexts/Chat.provider"
import ContactProvider from "../Contexts/Contact.provider"
import SocketProvider from "../Contexts/Socket.provider"
import useLocalStorage from "../Hooks/LocalStorage"
import Routes from "../Routing/Routes"

function App() {
  const [user, setUser] = useLocalStorage<string>("user")

  return user ? (
    <SocketProvider user={JSON.parse(user)}>
      <ContactProvider>
        <ChatProvider user={JSON.parse(user)}>
          <Routes />
        </ChatProvider>
      </ContactProvider>
    </SocketProvider>
  ) : (
    <Auth onSetUser={setUser} />
  )
}

export default App

export interface user {
  id: string
  username: string
  password: string
}
