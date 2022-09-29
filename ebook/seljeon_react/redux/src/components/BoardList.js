import { Link } from "react-router-dom"

function BoardList({ boards, isLoading }) {
  return (
    <div align="center">
      <h2>게시판 목록</h2>
      {isLoading && "로딩중"}
      {!isLoading && boards && (
        <>
          <Link to="/create">새로만들기</Link>
          <table border="1">
            <thead>
              <tr>
                <th align="center" width="80">
                  번호
                </th>
                <th align="center" width="320">
                  제목
                </th>
                <th align="center" width="100">
                  작성자
                </th>
                <th align="center" width="180">
                  등록일시
                </th>
              </tr>
            </thead>
            <tbody>
              {!boards.length && (
                <tr>
                  <td colSpan="4">List is empty</td>
                </tr>
              )}
              {!!boards.length &&
                boards.map((board) => (
                  <tr key={board.boardNo}>
                    <td align="center">{board.boardNo}</td>
                    <td align="left">
                      <Link to={`/read/${board.boardNo}`}>{board.title}</Link>
                    </td>
                    <td align="right">{board.writer}</td>
                    <td align="center">{board.regDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default BoardList
