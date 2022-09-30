import { combineReducers } from "redux"

import board from "./board"
import loading from "./loading"

const rootReducer = combineReducers({
  board,
  loading,
})

export default rootReducer
