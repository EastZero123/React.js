import { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuList from "./MenuList";

const Menu = (props) => {
  const [filteredType, setFilteredType] = useState("밥");

  const filterChangeHandler = (event) => {
    setFilteredType(event);
  };

  const selectedMenu = props.items.filter((menu) => {
    return menu.type === filteredType;
  });

  return (
    <div>
      <MenuFilter
        onFilterChange={filterChangeHandler}
        selected={filteredType}
      />
      <MenuList items={selectedMenu} />
    </div>
  );
};

export default Menu;
