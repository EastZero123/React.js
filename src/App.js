import { useState } from "react";
import "./App.css";
import Dropdown from "./component/Dropdown";
import Menu from "./component/Menu";

const SayHello = () => {
  return (
    <>
      <h1>인제 인사 그만하고싶어요</h1>
      <h1>그치만 다섯번째로 인사드려요</h1>
    </>
  );
};

function App() {
  const countrylist = [
    { country: "영국", nato: "북부유럽" },
    { country: "스페인", nato: "서부유럽" },
    { country: "독일", nato: "중부유럽" },
    { country: "이탈리아", nato: "남부유럽" },
  ];

  const [nationlist, setnationlist] = useState(countrylist);

  const [newnation, setnewnation] = useState("");

  const add = () => {
    var newsetnationlist = [...nationlist, newnation];
    setnationlist(newsetnationlist);

    setnewnation("");
  };

  const [filterednato, setFilterednato] = useState("북부유럽");

  const filterChangeHandler = (selectednato) => {
    setFilterednato(selectednato);
  };

  return (
    <div className="App">
      <SayHello />
      <input
        value={newnation}
        onChange={(event) => setnewnation(event.currentTarget.value)}
      />
      <button onClick={add}>등록</button>
      <Dropdown selected={filterednato} onChangeFilter={filterChangeHandler} />
      {nationlist.map((event) => {
        return <Menu items={nationlist} selected={filterednato} />;
      })}
      
    </div>
  );
}

export default App;
