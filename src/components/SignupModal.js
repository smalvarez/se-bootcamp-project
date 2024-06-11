import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'; // Assuming you're using React Bootstrap

function SignupModal({ show, onHide }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Implement your signup logic here (e.g., sending data to an API)
    console.log("Signup submitted:", email, password);
    onHide(); // Close the modal after submission
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignupSubmit}>
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
            SIGN UP
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;