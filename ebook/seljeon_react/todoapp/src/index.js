import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import todos, { restore } from "./modules/todos"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(todos, composeWithDevTools())

function loadData() {
  try {
    const data = localStorage.getItem("todo-app-data")
    if (!data) return

    store.dispatch(restore(JSON.parse(data)))
  } catch (error) {
    console.log(error)
  }
}

loadData()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
