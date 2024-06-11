import React, { useEffect } from "react";

const SignUpForm = () => {
  useEffect(() => {
    const form = document.getElementById("signup-form");

    if (form) {
      form.addEventListener("submit", handleFormSubmit);

      return () => {
        form.removeEventListener("submit", handleFormSubmit);
      };
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    console.log("Form submitted");
  };

  return (
    <form id="signup-form">
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
