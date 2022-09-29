const { handleActions, createAction } = require("redux-actions")
const FETCH = "board/FETCH"
const FETCH_SUCCESS = "board/FETCH_SUCCESS"
const FETCH_FAILURE = "board/FETCH_FAILURE"

const FETCH_LIST = "board/FETCH_LIST"
const FETCH_LIST_SUCCESS = "board/FETCH_LIST_SUCCESS"
const FETCH_LIST_FAILURE = "board/FETCH_LIST_FAILURE"

const CHANGE_TITLE = "board/CHANGE_TITLE"
const CHANGE_COTENT = "board/CHANGE_COTENT"

export const fetchStart = createAction(FETCH)

export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data)

export const fetchFailure = createAction(FETCH_FAILURE, (e) => e)

export const fetchListStart = createAction(FETCH_LIST)

export const fetchListSuccess = createAction(FETCH_LIST_SUCCESS, (data) => data)

export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e)

export const changeTitle = createAction(CHANGE_TITLE, (title) => title)

export const changeContent = createAction(CHANGE_COTENT, (content) => content)

const initialState = {
  loading: {
    FETCH: false,
    FETCH_LIST: false,
  },
  board: null,
  boards: [],
  error: null,
}

const board = handleActions(
  {
    [FETCH]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: true,
      },
    }),
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: false,
      },
      board: action.payload,
    }),
    [FETCH_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: false,
      },
    }),
    [FETCH_LIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH_LIST: true,
      },
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH_LIST: false,
      },
      boards: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH_LIST: false,
      },
      error: action.payload,
    }),
    [CHANGE_TITLE]: (state, { payload: title }) => ({
      ...state,
      board: {
        ...state.board,
        title,
      },
    }),
    [CHANGE_COTENT]: (state, { payload: content }) => ({
      ...state,
      board: {
        ...state.board,
        content,
      },
    }),
  }.initialState
)

export default board
