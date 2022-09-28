const TodoFilter = ({ filter, onChangeFilter }) => {
  const handleFilter = (e) => onChangeFilter(e.target.value)

  return (
    <div>
      <input
        type="radio"
        value="ALL"
        checked={filter === "ALL"}
        onChange={handleFilter}
      />
      <input
        type="radio"
        value="A"
        checked={filter === "A"}
        onChange={handleFilter}
      />
      <input
        type="radio"
        value="B"
        checked={filter === "B"}
        onChange={handleFilter}
      />
    </div>
  )
}

export default TodoFilter
