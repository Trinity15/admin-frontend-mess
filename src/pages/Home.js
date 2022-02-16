
import { Link } from "react-router-dom";
import "../styles/Home.css";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";


function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div onSubmit={handleSubmit}>
         <h1>Email</h1>     
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail("admin")}
          />
            <h1>Password</h1>    
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword("admin")}
          />
       <Link to="/menu">
        <Button block size="lg" type="submit" disabled={!validateForm()} >
          Login
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;


