import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Chat from "../Components/Chat"
import Home from "../Components/Home"
import { TopBar, SideBar } from "../Components/Nav"

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
      </Switch>
    </Router>
  )
}
