import { useCallback } from "react"
import { useDispatch } from "react-redux"
import BoardModifyForm from "../components/BoardModifyForm"
import { changeContent, changeTitle } from "../modules/board"

const BoardModifyContainer = () => {
  const dispatch = useDispatch()

  const onChangeTitle = useCallback(
    (title) => {
      return dispatchEvent(changeTitle(title))
    },
    [dispatch]
  )

  const onChangeContent = useCallback(
    (content) => {
      return dispatch(changeContent(content))
    },
    [dispatch]
  )

  return <BoardModifyForm />
}

export default BoardModifyContainer
