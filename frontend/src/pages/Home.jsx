import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd } from "../JS/actions/prod.actions";
import ListGame from "../component/ListGame";
import './Home.css'

const HomePage = () => {
  return (
    <div className="page-container home-page">
      <header className="header">
        <h1>Bienvenue chez PixelBoutique</h1>
        <p className="subtitle">Votre destination gaming ultime pour consoles et jeux vidéo.</p>
      </header>

      <main className="main-content home-grid">
        {/* Élément 1 : Présentation de la boutique */}
        <div className="home-card intro-card">
          <div className="card-body">
            <h2 className="home-card-title">👋 Bonjour et bienvenue !</h2>
            <p className="home-card-text">
              Découvrez <strong>PixelBoutique</strong>, l'espace entièrement dédié aux passionnés de jeux vidéo. 
              Que vous soyez un joueur nostalgique, un compétiteur dans l'âme ou à la recherche du tout dernier cri 
              technologique, nous sélectionnons le meilleur de l'univers vidéoludique rien que pour vous.
            </p>
          </div>
        </div>

        {/* Élément 2 : Section Consoles */}
        <div className="home-card feature-card console-theme">
          <div className="card-body">
            <h2 className="home-card-title">🎮 Nos Consoles & Accessoires</h2>
            <p className="home-card-text">
              Retrouvez les dernières nouveautés hardware ! De la puissance brute de la PlayStation 5 Pro à la 
              flexibilité nomade de la Nintendo Switch, découvrez notre guide complet et nos casques gaming premium.
            </p>
            <a href="/consoles" className="card-link-btn">Découvrir les consoles →</a>
          </div>
        </div>

        {/* Élément 3 : Section Jeux Vidéo */}
        <div className="home-card feature-card games-theme">
          <div className="card-body">
            <h2 className="home-card-title">🕹️ Notre Catalogue de Jeux</h2>
            <p className="home-card-text">
              Explorez notre sélection des meilleurs titres du moment. Des exclusivités PlayStation marquantes 
              aux aventures inoubliables de Nintendo, trouvez votre prochain coup de cœur vidéo-ludique.
            </p>
            <a href="/jeux_vidéo" className="card-link-btn">Explorer les jeux →</a>
          </div>
        </div>

        {/* Élément 4 : Connexion / Inscription */}
        <div className="home-card auth-card">
          <div className="card-body">
            <h2 className="home-card-title">🔒 Rejoignez la communauté</h2>
            <p className="home-card-text">
              Créez un compte dès aujourd'hui pour suivre vos commandes, sauvegarder vos favoris et bénéficier 
              d'offres exclusives réservées aux membres PixelBoutique.
            </p>
            <div className="auth-buttons">
              <a href="/login" className="auth-btn btn-login">Se connecter</a>
              <a href="/register" className="auth-btn btn-register">S'inscrire</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;