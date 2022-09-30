import { useCallback, useState } from "react"
import { Link } from "react-router-dom"

function ItemRegisterForm({ onRegister }) {
  const [itemName, steItemName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)

  const handleChangeItemName = useCallback((e) => {
    steItemName(e.target.value)
  }, [])

  const handleChangePrice = useCallback((e) => {
    setPrice(e.target.value)
  }, [])

  const handleChangeDescription = useCallback((e) => {
    setDescription(e.target.value)
  })

  const handleChangeFile = useCallback((e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      onRegister(itemName, price, description, file)
    },
    [onRegister, itemName, price, description, file]
  )

  return (
    <div align="center">
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>상품명</td>
              <td>
                <input
                  type="text"
                  value={itemName}
                  onChange={handleChangeItemName}
                />
              </td>
            </tr>
            <tr>
              <td>상품가격</td>
              <td>
                <input type="text" value={price} onChange={handleChangePrice} />
                원
              </td>
            </tr>
            <tr>
              <td>상품파일</td>
              <td>
                <input type="file" onChange={handleChangeFile} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>상품설명</td>
              <td>
                <textarea
                  rows="5"
                  value={description}
                  onChange={handleChangeDescription}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">등록</button>
          <Link to="/">취소</Link>
        </div>
      </form>
    </div>
  )
}

export default ItemRegisterForm
