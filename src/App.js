<<<<<<< HEAD
import React, { useState } from "react";
import Header from "./components/Header.js";
import Part1 from "./components/Part1.js";
import Part2 from "./components/Part2.js";
import Footer from "./components/Footer.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import ProfileSettings from "./components/ProfileSettings";
import LoginComponent from "./components/LoginComponent"; // Import the LoginComponent
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import React from "react";
import Header from "./components/Header";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
<<<<<<< HEAD
    <Router>
      <ErrorBoundary>
        <Header />
        <main className="container my-4">
          <Routes>
            <Route path="/login" element={<LoginComponent />} />{" "}
            {/* Added login route */}
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route
              path="/"
              element={
                <>
                  <Part1
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                  />
                  {isLoggedIn && <Part2 />}
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </Router>
=======
    <ErrorBoundary>
      <Header />
      <main className="container my-4">
        <Part1 />
        <Part2 />
      </main>
      <Footer />
    </ErrorBoundary>
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
  );
}

export default App;
