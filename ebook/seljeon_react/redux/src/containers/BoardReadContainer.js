import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import BoardRead from "../components/BoardRead"
import { fetchBoardApi, removeBoardApi } from "../lib/api"
import { fetchFailure, fetchStart, fetchSuccess } from "../modules/board"
import { endLoading, startLoading } from "../modules/loading"

const BoardReadContainer = ({ match, history }) => {
  const { boardNo } = match.params
  const dispatch = useDispatch()

  const { board, isLoading } = useSelector(({ board, loading }) => ({
    board: board.board,
    isLoading: loading.FETCH,
  }))

  const readBoard = useCallback(
    async (boardNo) => {
      dispatch(startLoading())
      try {
        const response = await fetchBoardApi(boardNo)
        dispatch(fetchSuccess(response.data))
        dispatch(endLoading("FETCH"))
      } catch (error) {
        dispatch(fetchFailure(error))
        dispatch(endLoading("FETCH"))
        throw error
      }
    },
    [dispatch]
  )
  useEffect(() => {
    readBoard(boardNo)
  }, [boardNo, readBoard])

  const onRemove = async () => {
    try {
      await removeBoardApi(boardNo)

      alert("삭제되었습니다")

      history.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  )
}

export default withRouter(BoardReadContainer)
