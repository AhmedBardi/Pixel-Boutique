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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Optionnel : Tu peux ajouter une petite sécurité ici pour éviter 
    // d'envoyer des données vides à ton action Redux si l'utilisateur clique trop vite.
    if (!userToConnect.email.trim() || !userToConnect.password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(login({
      email: userToConnect.email.trim(), 
      password: userToConnect.password.trim()
    }, navigate));
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