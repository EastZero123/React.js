import {
  Checkbox,
  IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useState } from "react"

const Todo = (props) => {
  const [item, setItem] = useState(props.item)
  const [readOnly, setReadOnly] = useState(true)

  const offReadOnlyMode = () => {
    setReadOnly(false)
  }

  const deleteHandler = () => {
    props.deleteItem(item)
  }

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true)
      props.update(item)
    }
  }

  const editEventHandler = (e) => {
    item.title = e.target.value
    setItem(item)
  }

  const checkboxEventHandler = (e) => {
    item.done = !item.done
    setItem(item)
    props.update(item)
  }

  return (
    <ListItem>
      <Checkbox cheked={item.done} onChange={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          onClick={offReadOnlyMode}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
          onChange={editEventHandler}
          onKeyDown={enterKeyEventHandler}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo">
          <DeleteOutlinedIcon onClick={deleteHandler} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todo
