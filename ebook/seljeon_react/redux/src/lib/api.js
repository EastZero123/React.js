import axios from "axios"

export const registerBoardApi = (title, content, writer) =>
  axios.post("/boards", { title, content, writer })

export const fetchBoardApi = (boardNo) => axios.get(`/boards/${boardNo}`)

export const fetchBoardListApi = () => axios.get("/boards")

export const removeBoardApi = (boardNo) => axios.delete(`/boards/${boardNo}`)

export const modifyBoardApi = (boardNo, title, content) =>
  axios.put(`/boards/${boardNo}`, { title, content })
