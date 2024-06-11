import React, { useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/part2.css";

function Part1() {
  const [modalState, setModalState] = useState({
    currentModal: null,
    navMenuVisible: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMenu = () => {
    setModalState((prevState) => ({
      ...prevState,
      navMenuVisible: !prevState.navMenuVisible,
    }));
  };

  const openModal = (modalId) => {
    setModalState((prevState) => ({
      ...prevState,
      currentModal: modalId,
    }));
  };

  const closeModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      currentModal: null,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
        closeModal();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <main className="container my-4">
        <section id="part1">
          <h2>Part 1</h2>
          <div className="position-relative">
            <img
              src="/images/img1.jpg"
              className="img-fluid rounded"
              alt="Studio workspace"
            />
            <div className="text-studio">STUDIO</div>
            <div className="text-work-hard">WE WORK HARD, WE PLAY HARD</div>
            <div className="button-container">
              <Button className="mr-2" onClick={() => openModal("loginModal")}>
                Login
              </Button>
              <Button onClick={() => openModal("signUpModal")}>Sign Up</Button>
              <Dropdown show={modalState.navMenuVisible} onToggle={toggleMenu}>
                <Dropdown.Toggle variant="secondary" id="burgerButton">
                  ☰
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#part1">Part 1</Dropdown.Item>
                  <Dropdown.Item href="#part2">Part 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </section>
      </main>

      <Modal
        show={modalState.currentModal === "loginModal"}
        onHide={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              LOGIN
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <SignUpForm
        show={modalState.currentModal === "signUpModal"}
        handleClose={closeModal}
      />
    </div>
  );
}

export default Part1;
