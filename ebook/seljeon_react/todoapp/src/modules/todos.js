import { createAction, handleActions } from "redux-actions"

const RESTORE = "RESTORE"
const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT"
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS"
const REMOVE_TODO = "REMOVE_TODO"
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS"
const CHANGE_FILTER = "CHANGE_FILTER"
const EDIT_TODO = "EDIT_TODO"
const SET_EDITING_ID = "SET_EDITING_ID"
const RESET_EDITING_ID = "RESET_EDITING_ID"

export const changeTodoInput = createAction(CHANGE_TODO_INPUT, (input) => input)

export const addTodo = createAction(ADD_TODO, (input) => ({
  text: input,
  done: false,
}))

export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS, (id) => id)

export const removeTodo = createAction(REMOVE_TODO, (id) => id)

export const clearAllTodos = createAction(CLEAR_ALL_TODOS)

export const restore = createAction(RESTORE, (data) => data)

export const changeFilter = createAction(CHANGE_FILTER, (filter) => filter)

export const editTodo = createAction(EDIT_TODO, (id, input) => ({ id, input }))

export const setEditingId = createAction(SET_EDITING_ID, (id) => id)

export const resetEditingId = createAction(RESET_EDITING_ID)

const initialState = {
  input: "",
  todos: [],
  nextTodoId: 1,
  filter: "ALL",
  editingId: 0,
}

const todos = handleActions(
  {
    [CHANGE_TODO_INPUT]: (state, { payload: input }) => ({
      ...state,
      input: input,
    }),
    [ADD_TODO]: (state, { payload: todo }) => {
      const newTodo = { ...todo, id: state.nextTodoId }
      const nextTodoId = state.nextTodoId + 1
      return {
        ...state,
        todos: state.todos.concat(newTodo),
        nextTodoId,
      }
    },
    [TOGGLE_TODO_STATUS]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todos, done: !todo.done } : todo
      ),
    }),
    [REMOVE_TODO]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [CLEAR_ALL_TODOS]: (state, action) => ({
      ...state,
      todos: [],
    }),
    [RESTORE]: (state, action) => {
      return {
        ...state,
        todos: action.payload.todos,
        nextTodoId: action.payload.nextTodoId,
      }
    },
    [CHANGE_FILTER]: (state, { payload: filter }) => ({
      ...state,
      filter: filter,
    }),
    [EDIT_TODO]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.input }
          : todo
      ),
    }),
    [SET_EDITING_ID]: (state, { payload: id }) => ({
      ...state,
      editingId: id,
    }),
    [RESET_EDITING_ID]: (state) => ({
      ...state,
      editingId: 0,
    }),
  },
  initialState
)

export default todos
