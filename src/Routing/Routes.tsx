import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Chat from "../Components/Chat"
import Home from "../Components/Home"
import { TopBar, SideBar } from "../Components/Nav"
import Register from "../Components/Register"

export default function Routes() {
  return (
    <Router>
      <SideBar />
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  )
}
