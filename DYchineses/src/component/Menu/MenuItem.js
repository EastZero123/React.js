const MenuItem = (props) => {
  return (
    <div>
      <h2>
        {props.title}의 가격은 {props.price}원입니다.
      </h2>
    </div>
  );
};

export default MenuItem;
