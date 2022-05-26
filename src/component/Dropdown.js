function Dropdown(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="북부유럽">북부유럽</option>
        <option value="서부유럽">서부유럽</option>
        <option value="남부유럽">남부유럽</option>
        <option value="중부유럽">중부유럽</option>
        <option value="동부유럽">동부유럽</option>
      </select>
    </div>
  );
}

export default Dropdown;
