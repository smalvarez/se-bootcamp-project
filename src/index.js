import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./App.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignupPage from "./components/SignupPage";
import ErrorBoundary from "./components/ErrorBoundary";

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
>>>>>>> 48106ecac0ed92470f345a48b55a3161279e0910
