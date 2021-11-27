import Auth from "./Auth"
import ChatProvider from "../Contexts/Chat.provider"
import ContactProvider from "../Contexts/Contact.provider"
import SocketProvider from "../Contexts/Socket.provider"
import useLocalStorage from "../Hooks/LocalStorage"
import Routes from "../Routing/Routes"

function App() {
  const [user, setUser] = useLocalStorage("user")
  const userPages = (
    <SocketProvider>
      <ContactProvider>
        <ChatProvider>
          <Routes />
        </ChatProvider>
      </ContactProvider>
    </SocketProvider>
  )

  return user ? userPages : <Auth onSetUser={setUser} />
}

export default App
