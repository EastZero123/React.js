import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BoardList from "../components/BoardList"
import { fetchBoardListApi } from "../lib/api"
import {
  fetchListFailure,
  fetchListStart,
  fetchListSuccess,
} from "../modules/board"

const BoardListContainer = () => {
  const dispatch = useDispatch()

  const { boards, isLoading } = useSelector((state) => ({
    boards: state.boards,
    isLoading: state.loading.FETCH_LIST,
  }))

  const listBoard = useCallback(async () => {
    dispatch(fetchListStart())
    try {
      const response = await fetchBoardListApi()

      dispatch(fetchListSuccess(response.data))
    } catch (error) {
      dispatch(fetchListFailure(error))

      throw error
    }
  }, [dispatch])

  useEffect(() => {
    listBoard()
  }, [listBoard])

  return <BoardList boards={boards} isLoading={isLoading} />
}

export default BoardListContainer
