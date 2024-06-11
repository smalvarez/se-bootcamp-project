// src/components/Part1.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./Signup";
import SignupModal from "./SignupModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/part2.css";

function Part1() {
  const [modalState, setModalState] = useState({ currentModal: null });

  const openModal = (modalId) => {
    setModalState({ currentModal: modalId });
  };

  const closeModal = () => {
    setModalState({ currentModal: null });
  };

  const openSignupWindow = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      "/signup.html",
      "Signup",
      `width=${width},height=${height},top=${top},left=${left}`
    );
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
                <Button
                  className="mr-2"
                  onClick={() => openModal("loginModal")}
                >
                  Login
                </Button>
                <Button className="mr-2" onClick={openSignupWindow}>
                  Sign Up
                </Button>
              </div>
            </div>
          </section>
        </main>

        <SignupModal
          show={modalState.currentModal === "loginModal"}
          onHide={closeModal}
          type="login"
        />

        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Part1;
