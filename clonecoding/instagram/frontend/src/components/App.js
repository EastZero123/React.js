import React, { useState } from "react";

import { BrowserRouter, Router, Routes, Link, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import AllPosts from "./AllPosts";
import AlertDismissible from "./AlertDismissible";
import CreatePost from "./CreatePost";
import Login from "./Login";
import Profile from "./Profile";
import Search from "./Search";
import Signup from "./Signup";

import "../css/App.css";

function App() {
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState("");

  return (
    <div className="fill-parent">
      <BrowserRouter>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand>Instagram Clone</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Feed</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/search">
                  <Nav.Link>Search</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/create-post">
                  <Nav.Link>Post</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                {user ? (
                  <Navbar.Text>
                    Signed in as : <Link to={"/profile/" + user}>{user}</Link> |{" "}
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        setUser("");
                        setAlert({
                          variant: "warning",
                          message: "You are now signed out!",
                        });
                      }}
                    >
                      Logout
                    </Button>
                  </Navbar.Text>
                ) : (
                  <Navbar.Text>
                    <Link to="/login">Not Signed In</Link>
                  </Navbar.Text>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {alert ? (
          <AlertDismissible {...alert} deleteAlert={() => setAlert(null)} />
        ) : null}
        <Routes>
          <Route element={<AllPosts />} path="/" exact />
          <Route
            element={<Login setAlert={setAlert} setUser={setUser} />}
            path="/login"
          />
          <Route
            element={<Signup setAlert={setAlert} setUser={setUser} />}
            path="/sign-up"
          />
          <Route element={<Profile />} path="/profile/:username" />
          <Route element={<Search />} path="/search" />
          <Route
            element={<CreatePost user={user} setAlert={setAlert} />}
            path="/create-post"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
