import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Chat from "../Components/Chat"
import Home from "../Components/Home"
import { TopBar, SideBar } from "../Components/Nav"
import Auth from "../Components/Auth"

export default function Routes() {
  return (
    <Router>
      <SideBar />
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  )
}
