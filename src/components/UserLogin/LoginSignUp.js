import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";

const LoginSignup = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);

  const handleLogin = async () => {
    try {
      // Replace 'API_ENDPOINT' and 'API_KEY' with actual SignUpGenius API endpoint and key
      const response = await fetch(
        `API_ENDPOINT?name=${name}&api_key=API_KEY`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Include any other required headers here
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);
      onLogin(name); // Notify parent component about the successful login
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="summit-container">
        <Link to="/home" className="summit" onClick={handleLogin}>
          Login
        </Link>
      </div>
      {userData && (
        <div className="user-data">
          <p>User Data: {JSON.stringify(userData)}</p>
          {/* Display user-specific activity here */}
          <p>Activity: {userData.activity}</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
