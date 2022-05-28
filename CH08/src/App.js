import React, { useState } from "react";

import Adduser from "./Users/AddUser";
import UserList from "./Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
