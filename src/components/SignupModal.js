// src/components/SignupModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SignupModal({ show, onHide, type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      type === "login"
        ? "https://smalvarez.github.io/se-bootcamp-project/login"
        : "https://smalvarez.github.io/se-bootcamp-project/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} successful`);
        localStorage.setItem("token", data.token);
        onHide();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{type === "login" ? "Login" : "Sign Up"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
            {type === "login" ? "LOGIN" : "SIGN UP"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;
