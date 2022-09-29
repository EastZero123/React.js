import { useCallback, useState } from "react"
import { Link } from "react-router-dom"

function BoardRegisterForm({ onRegister }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [writer, setWriter] = useState("")

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const handleChangeContent = useCallback((e) => {
    setContent(e.target.value)
  }, [])

  const handleChangeWriter = useCallback((e) => {
    setWriter(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      onRegister(title, content, writer)
    },
    [title, content, writer, onRegister]
  )

  return (
    <div align="center">
      <h2>게시판 등록</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" value={title} onChange={handleChangeTitle} />
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input
                  type="text"
                  value={writer}
                  onChange={handleChangeWriter}
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  rows="5"
                  value={content}
                  onChange={handleChangeContent}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            등록
          </button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  )
}

export default BoardRegisterForm
