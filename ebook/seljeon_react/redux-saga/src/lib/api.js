import axios from "axios"

export const fetchItemApi = (itemId) => axios.get(`/items/${itemId}`)

export const fetchItemListApi = () => axios.get("/items")
