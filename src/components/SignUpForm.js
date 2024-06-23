import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpForm = ({ show, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (password !== confirmPassword) {
=======

function SignUpForm({ show, handleClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
      alert("Passwords do not match!");
      return;
    }

    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:3001/signup", {
=======
      const response = await fetch("/.netlify/functions/signup", {
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
<<<<<<< HEAD
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (
          response.status === 409 &&
          data.message === "Email already exists."
        ) {
          setError(
            "Email address is already in use. Please use a different email."
          );
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return;
      }

      alert("Signup successful!");
=======
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      alert("Signup successful");
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
      handleClose();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<<<<<<< HEAD
        <Form onSubmit={handleSignUp}>
          <Form.Group controlId="formFirstName">
            <Form.Control
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Control
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button variant="primary" type="submit" block={true}>
            Sign Up
=======
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="secondary" type="submit" block>
            SIGN UP
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910

export default SignUpForm;
