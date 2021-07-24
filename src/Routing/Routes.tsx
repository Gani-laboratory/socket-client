import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Chat from "../Components/Chat"
import Home from "../Components/Home"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  )
}
