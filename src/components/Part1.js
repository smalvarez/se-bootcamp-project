import React, { useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/part2.css"; // Updated path to the CSS file

function Part1() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const toggleMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  return (
    <div>
      <main className="container my-4">
        <section id="part1">
          <h2>Part 1</h2>
          <div className="position-relative">
            <img
              src="images/img1.jpg"
              className="img-fluid rounded"
              alt="Studio workspace"
            />
            <div className="text-studio">STUDIO</div>
            <div className="text-work-hard">WE WORK HARD, WE PLAY HARD</div>
            <div className="button-container">
              <Button className="mr-2" onClick={() => setShowLoginModal(true)}>
                Login
              </Button>
              <Dropdown show={navMenuVisible} onToggle={toggleMenu}>
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

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="Email Address*" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password*" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              LOGIN
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Part1;
