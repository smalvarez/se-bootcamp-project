// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignupPage from "./components/SignupPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./mutationObserver";

const Root = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <ErrorBoundary>
    <Root />
  </ErrorBoundary>,
  document.getElementById("root")
);

// Render the signup page if on signup.html
if (document.getElementById("signup-root")) {
  ReactDOM.render(<SignupPage />, document.getElementById("signup-root"));
}
