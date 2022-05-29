import { useState } from "react";
import "./App.css";
import AddMenu from "./component/AddMenu/AddMenu";
import Menu from "./component/Menu/Menu";

const Greeting = () => {
  return (
    <div>
      <h1>앗! 타이어보다 싸다 동영반점</h1>
    </div>
  );
};

const Menuwrite = [
  {
    id: "e1",
    title: "짜장면",
    price: 4500,
    type: "면",
  },
  { id: "e2", title: "우동", price: 5000, type: "면" },
  {
    id: "e3",
    title: "짬뽕",
    price: 5000,
    type: "면",
  },
  {
    id: "e4",
    title: "볶음밥",
    price: 5000,
    type: "밥",
  },
  { id: "e5", title: "중화비빔밥", price: 6000, type: "밥" },
];

function App() {
  const [menuList, setMenuList] = useState(Menuwrite);

  const AddMenulist = (menu) => {
    setMenuList((prevmenu) => {
      return [menu, ...prevmenu];
    });
  };
  return (
    <div>
      <Greeting />
      <AddMenu onAddMenuList={AddMenulist} />
      <Menu items={menuList} />
    </div>
  );
}

export default App;
