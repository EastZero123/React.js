import axios from "axios"
import { withRouter } from "react-router-dom"
import ItemRegisterForm from "../components/ItemRegisterForm"

const ItemRegisterContainer = ({ history }) => {
  const onRegister = (itemName, price, description, file) => {
    const itemObject = {
      itemName: itemName,
      price: price,
      description: description,
    }
    const formData = new FormData()
    formData.append("item", JSON.stringify(itemObject))

    axios
      .post("/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("등록되었습니다")

        history.push("/read/" + res.data.itemId)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return <ItemRegisterForm onRegister={onRegister} />
}

export default withRouter(ItemRegisterContainer)
