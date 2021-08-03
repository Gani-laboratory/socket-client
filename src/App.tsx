import Auth from "./Components/Auth"
import SocketProvider from "./Contexts/Socket.provider"
import useLocalStorage from "./hooks/LocalStorage"
import Routes from "./Routing/Routes"

function App() {
  const [user, setUser] = useLocalStorage("user")
  const userPages = (
    <SocketProvider>
      <Routes />
    </SocketProvider>
  )

  return user ? userPages : <Auth onSetUser={setUser} />
}

export default App
