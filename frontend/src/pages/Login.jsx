import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../JS/actions/auth.action";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
  const [userToConnect, setUserToConnect] = useState({
    email: "", password: ""
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserToConnect({ ...userToConnect, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  // Check if inputs are empty before sending anything to the backend
  if (!email || !password) {
    alert("Please enter your login credentials.");
    return;
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, {
      email,
      password
    });
    
    // Handle successful login (save token, redirect, etc.)
  } catch (error) {
    console.error("Login failed", error);
  }
};

  return (
    <div className='formLogin'>
      <Form onSubmit={handleSubmit}>
        <h2 className='m-3'>Login Page</h2>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            name="email" 
            value={userToConnect.email} 
            onChange={handleChange}
            required // Ajoute une validation native du navigateur
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={userToConnect.password}
            onChange={handleChange}
            required // Ajoute une validation native du navigateur
          />
        </Form.Group>

        <div className="mb-3">
          <Form.Text className="text-muted">
            If you don't have an account please register first <Link to="/register">register</Link>
          </Form.Text>
        </div>

        {/* L'attribut disabled a été supprimé ici */}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;