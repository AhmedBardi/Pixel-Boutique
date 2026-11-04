import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css";
import { useDispatch } from 'react-redux';
import { register } from "../JS/actions/auth.action";
import { useNavigate } from 'react-router-dom'; 

function Register() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    imageProfile: "",
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const userToRegister = {
      name: newUser.name.trim(),
      email: newUser.email.trim(),
      password: newUser.password.trim(),
      imageProfile: newUser.imageProfile.trim()
    };
    
    dispatch(register(userToRegister, navigate));
    setNewUser({ name: "", email: "", password: "", imageProfile: "" });
  };

  return (
    <div className='formLogin'>    
      <Form onSubmit={handleSubmit}>
        {/* Ajout d'une classe personnalisée pour le titre */}
        <h2 className='auth-title'>Créer un compte</h2>
        
        {/* ---------------------------------Enter Name----------------------- */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control 
            type="text" 
            placeholder="Nom complet" 
            name="name" 
            value={newUser.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* --------------------------------Enter Email----------------------- */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            type="email" 
            placeholder="Adresse e-mail" 
            name="email" 
            value={newUser.email}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        {/* --------------------------------Enter Password----------------------- */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
            type="password" 
            placeholder="Mot de passe" 
            name="password"
            value={newUser.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* --------------------------------Image Url----------------------- */}
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Control 
            type="url" 
            placeholder="URL de l'image de profil (optionnel)" 
            name='imageProfile'
            value={newUser.imageProfile}
            onChange={handleChange}
          />
        </Form.Group>

        {/* ---------------------------------Login Link------------------ */}
        <div className="mb-4">
          <Form.Text className="text-muted">
            Vous avez déjà un compte ? <a href="/Login">Se connecter</a>
          </Form.Text>
        </div>

        {/* ----------------------------------Submit-------------------- */}
        {/* Ajout de la classe personnalisée pour le bouton */}
        <Button type="submit" className="auth-submit-btn">
          S'inscrire
        </Button>
      </Form> 
    </div>
  );
}

export default Register;