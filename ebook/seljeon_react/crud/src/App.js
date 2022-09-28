import "./App.css"
import BoardListContainer from "./containers/BoardListContainer"
import BoardModifyContainer from "./containers/BoardModifyContainer"
import BoardReadContainer from "./containers/BoardReadContainer"
import BoardRegisterContainer from "./containers/BoardRegisterContainer"
import { Route } from "react-router-dom"

function App() {
  return (
    <>
      <Route component={BoardListContainer} path="/" exact />
      <Route component={BoardRegisterContainer} path="/create" exact />
      <Route component={BoardModifyContainer} path="/edit/:boardNo" exact />
      <Route component={BoardReadContainer} path="/read/:boardNo" exact />
    </>
  )
}

export default App
