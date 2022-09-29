import * as client from "../lib/api"
import { useState } from "react"
import BoardRead from "../components/BoardRead"
import { useEffect } from "react"
import { withRouter } from "react-router-dom"

const BoardReadContainer = ({ match, history }) => {
  const { boardNo } = match.params
  const [board, setBoard] = useState(null)
  const [isLoading, setLoading] = useState(false)

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

  const onRemove = async () => {
    console.log("boardNo =" + boardNo)
    try {
      await client.removeBoard(boardNo)

      alert("삭제되었습니다")

      history.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    readBoard(boardNo)
  }, [boardNo])

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
