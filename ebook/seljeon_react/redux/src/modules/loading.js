import { createAction, handleAction } from "redux-actions"

const START_LOADING = "loading/START_LOADING"
const END_LOADING = "loading/END_LOADING"

export const startLoading = createAction(
  START_LOADING,
  (actionType) => actionType
)

export const endLoading = createAction(END_LOADING, (actionType) => actionType)

const initialState = {}

const loading = handleAction(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payloac]: true,
    }),
    [END_LOADING]: (state, action) => ({
      ...state,
      [action.payloac]: false,
    }),
  },
  initialState
)

export default loading
