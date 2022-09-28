import classes from "../Todo.module.css"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, onRemove, onToggle, onEdit }) => {
  return (
    <div className={classes.list}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default TodoList
