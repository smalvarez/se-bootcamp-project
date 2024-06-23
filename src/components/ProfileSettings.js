import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileSettings({ show, handleClose, user, setIsLoggedIn }) {
  const [currentEmail, setCurrentEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCurrentEmail(user.email);
      setFirstName(user.first_name);
      setLastName(user.last_name);
    }
  }, [user]);

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/checkEmail?email=${email}`
      );
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        alert("Email already exists. Please choose a different one.");
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/updateEmail`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ currentEmail, newEmail: email }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      setCurrentEmail(email);
      alert("Email updated successfully");
      setIsEditingEmail(false);
    } catch (error) {
      console.error("Error updating email:", error);
      alert(
        error.message === "Email already exists"
          ? "Email already exists. Please choose a different one."
          : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/updatePassword`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            email: currentEmail,
            oldPassword,
            newPassword: password,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      alert("Password updated successfully");
      setIsEditingPassword(false);
    } catch (error) {
      console.error("Error updating password:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateName = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/updateName`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ email: currentEmail, firstName, lastName }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      alert("Name updated successfully");
      setIsEditingName(false);
    } catch (error) {
      console.error("Error updating name:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/deleteAccount`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ email: currentEmail }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      alert("Account deleted successfully");
      localStorage.removeItem("token"); // Sign off the user
      setIsLoggedIn(false); // Update state to reflect sign-off
      handleClose();
      navigate("/"); // Navigate to the homepage after account deletion
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={`${process.env.PUBLIC_URL}/images/profilepic.png`}
          roundedCircle
          className="mb-3"
        />
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            {isEditingName ? (
              <>
                <Form.Control
                  type="text"
                  placeholder="Enter new first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter new last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Button
                  variant="secondary"
                  onClick={() => setIsEditingName(false)}
                >
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleUpdateName}>
                  Update Name
                </Button>
              </>
            ) : (
              <div>
                <Form.Control
                  type="text"
                  value={`${firstName} ${lastName}`}
                  readOnly
                />
                <Button
                  variant="secondary"
                  onClick={() => setIsEditingName(true)}
                >
                  Edit
                </Button>
              </div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            {isEditingEmail ? (
              <>
                <Form.Control
                  type="email"
                  placeholder="Enter new email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="secondary"
                  onClick={() => setIsEditingEmail(false)}
                >
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleUpdateEmail}>
                  Update Email
                </Button>
              </>
            ) : (
              <div>
                <Form.Control type="text" value={currentEmail} readOnly />
                <Button
                  variant="secondary"
                  onClick={() => setIsEditingEmail(true)}
                >
                  Edit
                </Button>
              </div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            {isEditingPassword ? (
              <>
                <Form.Control
                  type="password"
                  placeholder="Enter old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  variant="secondary"
                  onClick={() => setIsEditingPassword(false)}
                >
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleUpdatePassword}>
                  Update Password
                </Button>
              </>
            ) : (
              <div>
                <Form.Control type="password" value="********" readOnly />
                <Button
                  variant="secondary"
                  onClick={() => setIsEditingPassword(true)}
                >
                  Edit
                </Button>
              </div>
            )}
          </Form.Group>
          <Button variant="danger" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProfileSettings;
