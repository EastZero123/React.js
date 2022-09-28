import classes from "../Todo.module.css"

const TodoInput = ({ input, onInsert, onChangeInput }) => {
  const onSubmit = (e) => {
    e.preventDefault()

    onInsert(input)
    onChangeInput("")
  }

  const onChange = (e) => onChangeInput(e.target.value)

  return (
    <div className={classes.input}>
      <form onSubmit={onSubmit}>
        <input placeholder="writer" value={input} onChange={onChange} />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}

export default TodoInput
