import React, { useState } from "react";
import Header from "./components/Header.js";
import Part1 from "./components/Part1.js";
import Part2 from "./components/Part2.js";
import Footer from "./components/Footer.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import ProfileSettings from "./components/ProfileSettings";
import LoginComponent from "./components/LoginComponent"; // Import the LoginComponent
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
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
  );
}

export default App;
