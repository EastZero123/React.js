import { useEffect } from "react"
import { useState } from "react"
import BoardList from "../components/BoardList"
import * as client from "../lib/api"

const BoardListContainer = () => {
  const [boards, setBoards] = useState([])
  const [isLoading, setLoading] = useState(false)

  const listBoard = async () => {
    setLoading(true)
    try {
      const response = await client.fetchBoardList()

      setBoards(response.data)

      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  useEffect(() => {
    listBoard()
  }, [])

  return <BoardList boards={boards} isLoading={isLoading} />
}

export default BoardListContainer
