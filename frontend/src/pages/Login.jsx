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

    const { email, password } = userToConnect;

    // Check if inputs are empty before sending anything
    if (!email || !password) {
      alert("Please enter your login credentials.");
      return;
    }

    try {
      // Dispatches your Redux login action (passing credentials and navigate function if handled there)
      dispatch(login(userToConnect, navigate));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className='formLogin'>
      <Form onSubmit={handleLoginSubmit}>
        <h2 className='m-3'>Login Page</h2>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            name="email" 
            value={userToConnect.email} 
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={userToConnect.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="mb-3">
          <Form.Text className="text-muted">
            If you don't have an account please register first <Link to="/register">register</Link>
          </Form.Text>
        </div>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;