import { createSelector } from "reselect"

const getTodos = (state) => state.todos

const getFilter = (state) => state.filter

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    if (filter === "ALL") {
      return todos
    }

    if (filter === "A") {
      return todos.filter((todo) => {
        return todos.done === false
      })
    }

    if (filter === "B") {
      return todos.filter((todo) => {
        return todo.done === true
      })
    }
  }
)
