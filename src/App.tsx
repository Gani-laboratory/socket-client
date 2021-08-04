import Auth from "./Components/Auth"
import ContactProvider from "./Contexts/Contact.provider"
import SocketProvider from "./Contexts/Socket.provider"
import useLocalStorage from "./hooks/LocalStorage"
import Routes from "./Routing/Routes"

function App() {
  const [user, setUser] = useLocalStorage("user")
  const userPages = (
    <SocketProvider>
      <ContactProvider>
        <Routes />
      </ContactProvider>
    </SocketProvider>
  )

  return user ? userPages : <Auth onSetUser={setUser} />
}

export default App
