// src/components/Part1.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/part2.css";

function Part1() {
  const [modalState, setModalState] = useState({ currentModal: null });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openModal = (modalId) => {
    setModalState({ currentModal: modalId });
  };

  const closeModal = () => {
    setModalState({ currentModal: null });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://se-bootcamp-project.stevenalvarez.me/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

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
    <Router>
      <div>
        <main className="container my-4">
          <section id="part1">
            <h2>Part 1</h2>
            <div className="position-relative">
              <img
                src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                className="img-fluid rounded"
                alt="Studio workspace"
              />
              <div className="text-studio">STUDIO</div>
              <div className="text-work-hard">WE WORK HARD, WE PLAY HARD</div>
              <div className="button-container">
                <Button className="mr-2" onClick={() => openModal("loginModal")}>
                  Login
                </Button>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
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

        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Part1;
