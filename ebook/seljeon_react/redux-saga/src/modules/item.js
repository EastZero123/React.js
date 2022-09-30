import { createAction, handleActions } from "redux-actions"
import { fetchItemApi } from "../lib/api"
import { endLoading, startLoading } from "./loading"
import { call, put, takeLatest } from "redux-saga/effects"

const FETCH_SUCCESS = "item/FETCH_SUCCESS"
const FETCH_FAILURE = "item/FETCH_FAILURE"

const FETCH_LIST_SUCCESS = "item/FETCH_LIST_SUCCESS"
const FETCH_LIST_FAILURE = "item/FETCH_LIST_FAILURE"

export const FETCH_ITEM = "item/FETCH_ITEM"

export const FETCH_ITEM_LIST = "item/FETCH_ITEM_LIST"

export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data)
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e)

export const fetchItem = createAction(FETCH_ITEM, (itemId) => itemId)

function* fetchItemSaga(action) {
  yield put(startLoading(FETCH_ITEM))
  try {
    const response = yield call(fetchItemApi, action.payload)
    yield put(fetchSuccess(response.data))
  } catch (error) {
    yield put(fetchFailure(error))
  }
  yield put(endLoading(FETCH_ITEM))
}

export function* itemSaga() {
  yield takeLatest(FETCH_ITEM, fetchItemSaga)
}

const initialState = {
  item: null,
  items: [],
  error: null,
}

const item = handleActions(
  {
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      item: action.payload,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
)

export default item
