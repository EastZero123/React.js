import React, { useCallback, useEffect, useState } from "react"
import classes from "../Todo.module.css"
import { useSelector, useDispatch } from "react-redux"
import { resetEditingId, setEditingId } from "../modules/todos"

const TodoItem = ({ todo, onRemove, onToggle, onEdit }) => {
  const [inputText, setInputText] = useState("")
  const { id, text, done } = todo
  const editInput = React.createRef()
  const dispatch = useDispatch()
  const { editingId } = useSelector((state) => ({
    editingId: state.editingId,
  }))

  const showInput = id === editingId

  useEffect(() => {
    if (todo) {
      setInputText(todo.text)
    }
  }, [todo])

  useEffect(() => {
    if (editInput.current) {
      editInput.current.focus()
    }
  }, [editInput])

  const onDoubleClick = () => {
    onSetEditingId(id)

    setInputText(text)
  }

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEdit(id, inputText)
      onResetEditingId()
    }
  }

  const handleBlur = () => {
    onResetEditingId()
  }

  const onSetEditingId = useCallback(
    (id) => dispatch(setEditingId(id)),
    [dispatch]
  )

  const onResetEditingId = useCallback(
    () => dispatch(resetEditingId()),
    [dispatch]
  )

  return (
    <div className={classes.item}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
      {showInput && (
        <input
          value={inputText}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          ref={editInput}
        />
      )}
      {!showInput && <span onDoubleClick={onDoubleClick}>{text}</span>}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}

export default TodoItem
