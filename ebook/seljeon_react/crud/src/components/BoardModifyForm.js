import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

function BoardModifyForm({ board, isLoading, onModify }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onModify(board.boardNo, title, content)
  }

  useEffect(() => {
    console.log("useEffect board = " + board)

    if (board) {
      console.log("board.title = " + board.title)
      console.log("board.content = " + board.content)

      setTitle(board.title)
      setContent(board.content)
    }
  }, [board])

  return (
    <div align="center">
      <h2>게시판 수정</h2>
      {isLoading && "로딩중"}
      {!isLoading && board && (
        <>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>번호</td>
                  <td>
                    <input value={board.boardNo} type="text" disabled />
                  </td>
                </tr>
                <tr>
                  <td>등록일시</td>
                  <td>
                    <input value={board.regDate} type="text" disabled />
                  </td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>
                    <input
                      value={title}
                      type="text"
                      onChange={handleChangeTitle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>작성자</td>
                  <td>
                    <input type="text" value={board.writer} disabled />
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
              <button type="submit">수정</button>
              <Link to={`/read/${board.boardNo}`}>취소</Link>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default BoardModifyForm
