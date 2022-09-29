import { useEffect } from "react"
import { useState } from "react"
import { withRouter } from "react-router-dom"
import BoardModifyForm from "../components/BoardModifyForm"
import * as client from "../lib/api"

const BoardModifyContainer = ({ match, history }) => {
  const { boardNo } = match.params

  const [board, setBoard] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const onModify = async (boardNo, title, content) => {
    try {
      await client.modifyBoard(boardNo, title, content)

      alert("수정되었습니다")

      history.push("/read/" + boardNo)
    } catch (error) {
      console.log(error)
    }
  }

  const readBoard = async (boardNo) => {
    setLoading(true)
    try {
      const response = await client.fetchBoard(boardNo)

      setBoard(response.data)

      setLoading(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    readBoard(boardNo)
  }, [boardNo])

  return (
    <BoardModifyForm board={board} isLoading={isLoading} onModify={onModify} />
  )
}

export default withRouter(BoardModifyContainer)
