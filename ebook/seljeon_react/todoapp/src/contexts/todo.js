import { createContext, useCallback, useRef, useState } from "react"

const TodoContext = createContext({
  state: { todos: [], input: "" },
  actions: {
    setTodos: () => {},
    onInsert: () => {},
    onRemove: () => {},
    onToggle: () => {},
    onClearAll: () => {},
    onChange: () => {},
    onSubmit: () => {},
  },
})

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const nextId = useRef(1)

  const onChange = useCallback((e) => {
    setInput(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      onInsert(input)
      setInput("")
    },
    [onInsert, input]
  )

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    }
    setTodos((todos) => todos.concat(todo))
    nextId.current += 1
  }, [])

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }, [])

  const onClearAll = useCallback(() => {
    setTodos(() => [])
  }, [])

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todos.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }, [])

  const value = {
    state: { todos, input },
    actions: {
      setTodos,
      onInsert,
      onRemove,
      onToggle,
      onClearAll,
      onChange,
      onSubmit,
    },
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

const { Consumer: TodoConsumer } = TodoContext

export { TodoProvider, TodoConsumer }

export default TodoContext
