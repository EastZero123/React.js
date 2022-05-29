import MenuItem from "./MenuItem";

const MenuList = (props) => {
  if (props.items.length === 0) {
    return <h1>리스트가 없는데용?</h1>;
  }
  return (
    <div>
      <ul>
        {props.items.map((menu) => (
          <MenuItem
            key={menu.id}
            title={menu.title}
            price={menu.price}
            type={menu.type}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
