import logo from "./logo.svg"
import "./App.css"
import { Route } from "react-router-dom"
import ItemListContainer from "./container/ItemListContainer"
import ItemRegisterContainer from "./container/ItemRegisterContainer"
import ItemModifyContainer from "./container/ItemModifyContainer"
import ItemReadContainer from "./container/ItemReadContainer"

function App() {
  return (
    <>
      <Route component={ItemListContainer} path="/" exact />
      <Route component={ItemRegisterContainer} path="/create" />
      <Route component={ItemModifyContainer} path="/edit/:boardNo" />
      <Route component={ItemReadContainer} path="/read/:boardNo" />
    </>
  )
}

export default App
