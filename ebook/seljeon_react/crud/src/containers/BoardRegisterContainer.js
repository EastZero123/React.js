import { withRouter } from "react-router-dom"
import BoardRegisterForm from "../components/BoardRegisterForm"
import * as client from "../lib/api"

const BoardRegisterContainer = ({ history }) => {
  const onRegister = async (title, content, writer) => {
    try {
      const response = await client.registerBoard(title, content, writer)

      alert("등록되었습니다")

      history.push("/read/" + response.data.boardNo)
    } catch (error) {
      console.log(error)
    }
  }
  return <BoardRegisterForm onRegister={onRegister} />
}

export default withRouter(BoardRegisterContainer)
