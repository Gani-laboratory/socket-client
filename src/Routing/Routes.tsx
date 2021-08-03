import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Chat from "../Components/Chat"
import Home from "../Components/Home"
import { TopBar, SideBar } from "../Components/Nav"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SideBar />
          <TopBar />
          <Home />
        </Route>
        <Route exact path="/chat">
          <SideBar />
          <TopBar />
          <Chat />
        </Route>
      </Switch>
    </Router>
  )
}
