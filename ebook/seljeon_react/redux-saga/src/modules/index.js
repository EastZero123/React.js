import { combineReducers } from "redux"

import item, { itemSaga } from "./item"
import loading from "./loading"
import { all } from "@redux-saga/core/effects"

const rootReducer = combineReducers({ item, loading })

export function* rootSaga() {
  yield all([itemSaga()])
}

export default rootReducer
