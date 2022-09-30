import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import BoardModifyForm from "../components/BoardModifyForm"
import { fetchBoardApi, modifyBoardApi } from "../lib/api"
import {
  changeContent,
  changeTitle,
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../modules/board"
import { endLoading, startLoading } from "../modules/loading"

const BoardModifyContainer = ({ match, history }) => {
  const dispatch = useDispatch()

  const { boardNo } = match.params

  const [board, isLoading] = useSelector(({ board, loading }) => ({
    board: board.board,
    isLoading: loading.FETCH,
  }))

  const onChangeTitle = useCallback(
    (title) => {
      return dispatch(changeTitle(title))
    },
    [dispatch]
  )

  const onChangeContent = useCallback(
    (content) => {
      return dispatch(changeContent(content))
    },
    [dispatch]
  )

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

  const onModify = async (boardNo, title, content) => {
    try {
      await modifyBoardApi(boardNo, title, content)
      alert("수정되었습니다")
      history.push("/read/" + boardNo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    readBoard(boardNo)
  }, [boardNo, readBoard])

  return (
    <BoardModifyForm
      board={board}
      isLoading={isLoading}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onModify={onModify}
    />
  )
}

export default withRouter(BoardModifyContainer)
