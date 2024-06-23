import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import SignUpForm from "./SignUpForm";
import ProfileSettings from "./ProfileSettings"; // Import the ProfileSettings component
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/part2.css";

function Part1({ setIsLoggedIn, isLoggedIn }) {
  const [modalState, setModalState] = useState({
    currentModal: null,
    navMenuVisible: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Unexpected response type: ${text}`);
      }

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        fetchCurrentUser();
        alert("Login successful");
        closeModal();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error.message || error);
      alert("An error occurred. Please try again.");
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/getProfile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user profile:", error.message || error);
      alert("Failed to fetch user profile. Please try again.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchCurrentUser();
    }
  }, [isLoggedIn]);

  const handleSignOff = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    alert("You have been signed off.");
  };

  return (
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
              {!isLoggedIn ? (
                <>
                  <Button
                    className="mr-2"
                    onClick={() => openModal("loginModal")}
                  >
                    Login
                  </Button>
                  <Button onClick={() => openModal("signUpModal")}>
                    Sign Up
                  </Button>
                </>
              ) : (
                <Dropdown
                  show={modalState.navMenuVisible}
                  onToggle={toggleMenu}
                >
                  <Dropdown.Toggle variant="secondary" id="burgerButton">
                    ☰
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#part1">Part 1</Dropdown.Item>
                    <Dropdown.Item href="#part2">Part 2</Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => openModal("profileSettingsModal")}
                    >
                      Profile Settings
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleSignOff}>
                      Sign Off
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </div>
        </section>
        {isLoggedIn && (
          <section id="part2">{/* Add your Part 2 content here */}</section>
        )}
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
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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

      <ProfileSettings
        show={modalState.currentModal === "profileSettingsModal"}
        handleClose={closeModal}
        user={user}
        setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn to ProfileSettings
      />
    </div>
  );
}

export default Part1;
