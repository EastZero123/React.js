import { useState } from "react";

const AddMenuForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredType, setEnteredType] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const menuData = {
      title: enteredTitle,
      price: +enteredPrice,
      type: enteredType,
    };

    props.onSaveMenuData(menuData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredType("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>메뉴 이름</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label>가격</label>
          <input
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div>
          <input type="radio" value="밥" onChange={typeChangeHandler} />
          <label>밥</label>

          <input type="radio" value="면" onChange={typeChangeHandler} />
          <label>면</label>
        </div>
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
};

export default AddMenuForm;
