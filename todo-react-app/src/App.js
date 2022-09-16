import "./App.css"
import Todo from "./Todo"
import { List, Paper } from "@mui/material"
import AddTodo from "./AddTodo"
import { useEffect, useState } from "react"
import { call } from "./service/ApiService"

function App() {
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    call("/todo", "GET", null).then((response) => setItemList(response.data))
  }, [])

  const addData = (item) => {
    call("/todo", "POST", item).then((response) => setItemList(response.data))
  }

  const deleteData = (item) => {
    call("/todo", "DELETE", item).then((response) => setItemList(response.data))
  }

  const updateData = (item) => {
    call("/todo", "PUT", item).then((response) => setItemList(response.data))
  }

  // const deleteItem = (items) => {
  //   const newItem = itemList.filter((item) => items.id != item.id)
  //   setItemList(newItem)
  // }

  var todoItems = itemList.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {itemList.map((item, idx) => {
          return (
            <Todo
              item={item}
              key={item.id}
              deleteItem={deleteData}
              update={updateData}
            />
          )
        })}
      </List>
    </Paper>
  )

  // const addInput = (item) => {
  //   const thisItem = [...itemList, item]
  //   setItemList(thisItem)
  //   console.log(itemList)
  // }

  return (
    <div>
      <AddTodo add={addData} itemList={itemList} />
      <div className="App">{todoItems}</div>
    </div>
  )
}

export default App
