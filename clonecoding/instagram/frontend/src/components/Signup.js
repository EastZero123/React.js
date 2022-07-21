import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  function createAccount(e) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
      }),
    };
    fetch("/createUser", requestOptions)
      .then((_res) => {
        console.log(_res.json());
      })
      .catch((err) => console.error(err));
  }

  function updateUsername(e) {
    setUsername(e.target.value);
  }

  function updateFirstname(e) {
    setFirstName(e.target.value);
  }

  function updateLastname(e) {
    setLastName(e.target.value);
  }

  return (
    <Form className="">
      <Form.Group className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onInput={updateUsername}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onInput={updateFirstname}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          onInput={updateLastname}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={createAccount}>
        Create Account
      </Button>
    </Form>
  );
}
