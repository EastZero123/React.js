const MenuFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div>
      <label>필터링 끝</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="밥">밥</option>
        <option value="면">면</option>
      </select>
    </div>
  );
};

export default MenuFilter;
