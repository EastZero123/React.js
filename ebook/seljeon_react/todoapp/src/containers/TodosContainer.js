import Todos from "../components/Todos"
import todos, {
  addTodo,
  changeFilter,
  changeTodoInput,
  clearAllTodos,
  editTodo,
  removeTodo,
  toggleTodoStatus,
} from "../modules/todos"
import { useSelector, useDispatch } from "react-redux"
import { useCallback } from "react"
import { getFilteredTodos } from "../modules/selector"

const TodosContainer = () => {
  const { input, filter, filteredTodos } = useSelector((state) => ({
    input: state.input,
    filter: state.filter,
    filteredTodos: getFilteredTodos(state),
  }))

  const dispatch = useDispatch()

  const onChangeInput = useCallback(
    (input) => dispatch(changeTodoInput(input)),
    [dispatch]
  )
  const onInsert = useCallback((input) => dispatch(addTodo(input)), [dispatch])

  const onToggle = useCallback(
    (id) => dispatch(toggleTodoStatus(id)),
    [dispatch]
  )
  const onRemove = useCallback((id) => dispatch(removeTodo(id)), [dispatch])

  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch])

  const onChangeFilter = useCallback(
    (filter) => dispatch(changeFilter(filter)),
    [dispatch]
  )

  const onEdit = useCallback(
    (id, input) => dispatch(editTodo(id, input)),
    [dispatch]
  )

  return (
    <Todos
      input={input}
      todos={filteredTodos}
      filter={filter}
      onClearAll={onClearAll}
      changeTodoInput={onChangeInput}
      addTodo={onInsert}
      toggleTodoStatus={onToggle}
      removeTodo={onRemove}
      onChangeFilter={onChangeFilter}
      onEdit={onEdit}
    />
  )
}

export default TodosContainer
