import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/actions/auth.action';
import { useNavigate } from "react-router-dom";
import './BarNav.css';

function BarNav() {
  const user = useSelector((state) => state.authReducer?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); 
    dispatch(logout(navigate)); 
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="navbar-container">
        {/* Style du logo PixelBoutique */}
        <Navbar.Brand href="/" className="navbar-logo">
          🎮 PixelBoutique
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link href="/consoles" className="navbar-link">Consoles</Nav.Link>
            {/* Ajusté de /jeux_vidéo à /jeux pour correspondre à votre page d'accueil */}
            <Nav.Link href="/jeux_vidéo" className="navbar-link">Jeux vidéo</Nav.Link>
            
            {user ? (
              <>
                <Nav.Link href="/profile" className="navbar-link">Profile</Nav.Link>
                <Nav.Link href="#" onClick={handleLogout} className="navbar-link">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/register" className="navbar-link">Register</Nav.Link>
                {/* Le bouton Login utilise la classe spéciale pour se démarquer */}
                <Nav.Link href="/login" className="navbar-link navbar-btn">Login</Nav.Link>
              </>
            )}
          </Nav>
          
          {/* Section utilisateur connecté (alignée à droite) */}
          {user && (
            <div className="user-profile-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#0f172a' }}>
                {user.name}
              </h4>
              <img 
                src={user.imageProfile} 
                alt="Profile" 
                style={{ width: "40px", height: "40px", borderRadius: "100%", objectFit: "cover", border: "2px solid #4f46e5" }}
              />
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarNav;