import { withRouter } from "react-router-dom"
import BoardRegisterForm from "../components/BoardRegisterForm"
import { registerBoardApi } from "../lib/api"

const BoardRegisterContainer = ({ history }) => {
  const onRegister = async (title, content, writer) => {
    try {
      const response = await registerBoardApi(title, content, writer)

      alert("등록되었습니다")

      history.push("/read/" + response.data.boardNo)
    } catch (error) {
      console.log(error)
    }
  }

  return <BoardRegisterForm onRegister={onRegister} />
}

export default withRouter(BoardRegisterContainer)
