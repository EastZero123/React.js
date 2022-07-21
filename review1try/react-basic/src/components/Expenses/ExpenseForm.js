const ExpenseForm = (props) => {
  return (
    <div>
      <div>{props.items.date.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.items.title}</h2>
        <div className="expense-item__price">${props.items.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseForm;
