import { useContext } from "react"
import TodoContext, { TodoConsumer } from "../contexts/todo"
import classes from "../Todo.module.css"
import { useSelector } from "react-redux"

const TodoFooter = ({ onClearAll }) => {
  const { todos, nextTodoId } = useSelector((state) => ({
    todos: state.todos,
    nextTodoId: state.nextTodoId,
  }))

  const data = {
    todos,
    nextTodoId,
  }

  const onSave = () => {
    localStorage.setItem("todo-app-data", JSON.stringify(data))
  }
  return (
    <div className={classes.footer}>
      <button onClick={onClearAll}>모두 삭제</button>
      <button onClick={onSave}>저장</button>
    </div>
  )
}

export default TodoFooter
