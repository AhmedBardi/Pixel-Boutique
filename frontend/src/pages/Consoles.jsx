import React from 'react';
import './Consoles.css'; // Assurez-vous que le fichier CSS porte ce nom exact

// Données des produits conservées à l'identique
const gamingData = {
  playstation: [
    { id: 1, name: "PlayStation 5 Pro", desc: "La version ultra-boostée avec ray-tracing amélioré et des performances 4K de pointe.", price: "799€", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "PlayStation 5 Slim", desc: "Le modèle standard plus compact, idéal pour profiter des exclusivités Sony.", price: "549€", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGxheVN0YXRpb24lMjA1JTIwU2xpbXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "PlayStation Portal", desc: "Le lecteur à distance pour jouer à vos jeux PS5 directement entre vos mains.", price: "219€", img: "https://images.unsplash.com/photo-1709587797077-7a2c94411514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGxheVN0YXRpb24lMjBQb3J0YWx8ZW58MHx8MHx8fDA%3D" }
  ],
  nintendo: [
    { id: 1, name: "Nintendo Switch OLED", desc: "Des couleurs vibrantes et un contraste saisissant pour jouer en mode portable.", price: "349€", img: "https://images.unsplash.com/photo-1612036781124-847f8939b154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmludGVuZG8lMjBTd2l0Y2glMjBPTEVEfGVufDB8fDB8fHww" },
    { id: 2, name: "Nintendo Switch Standard", desc: "La console hybride classique pour jouer sur votre TV ou en déplacement.", price: "299€", img: "https://images.unsplash.com/photo-1749138149339-b744bb979317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmludGVuZG8lMjBTd2l0Y2glMjBTdGFuZGFyZHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Nintendo Switch Lite", desc: "La version 100% portable, compacte et légère pour les joueurs nomades.", price: "199€", img: "https://images.unsplash.com/photo-1618556679398-486ba2cf2e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmludGVuZG8lMjBTd2l0Y2glMjBMaXRlfGVufDB8fDB8fHww" }
  ],
  casques: [
    { id: 1, name: "SteelSeries Arctis Nova Pro", desc: "Le roi du son gaming avec réduction de bruit active et double batterie sans fil.", price: "379€", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "HyperX Cloud III Wireless", desc: "Le confort légendaire d'HyperX avec une autonomie monstrueuse de 120 heures.", price: "179€", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Logitech G Pro X 2 LIGHTSPEED", desc: "Conçu avec les pros de l'esport, doté de transducteurs en graphène ultra-précis.", price: "269€", img: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80" }
  ]
};

const GamingPage = () => {
  // Le sous-composant de la carte utilise maintenant vos nouvelles variables et classes épurées
  const Card = ({ item, categoryClass }) => (
    <div className={`game-card card-gaming ${categoryClass}`}>
      <div className="image-container">
        <img src={item.img} alt={item.name} className="game-image" loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="game-title" title={item.name}>{item.name}</h3>
        <p className="game-release">{item.desc}</p>
        <div className="card-footer" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginTop: '1.25rem' }}>
          <span className="game-price" style={{ fontSize: '1.25rem', fontWeight: '800', color: '#4f46e5' }}>{item.price}</span>
          <button className="card-button" style={{ margin: 0, width: 'auto' }}>Voir le produit</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <header className="header">
        <h1>L'Univers du Gaming</h1>
        <p>Découvrez notre sélection des meilleures consoles et accessoires PC du moment.</p>
      </header>

      <main className="main-content">
        {/* PlayStation */}
        <section className="console-section">
          <h2 className="section-title title-playstation">PlayStation</h2>
          <div className="game-grid">
            {gamingData.playstation.map((item) => (
              <Card key={item.id} item={item} categoryClass="ps-category" />
            ))}
          </div>
        </section>

        {/* Nintendo Switch */}
        <section className="console-section">
          <h2 className="section-title title-nintendo">Nintendo Switch</h2>
          <div className="game-grid">
            {gamingData.nintendo.map((item) => (
              <Card key={item.id} item={item} categoryClass="nintendo-category" />
            ))}
          </div>
        </section>

        {/* Casques PC */}
        <section className="console-section">
          <h2 className="section-title title-xbox">Casques PC Gamer</h2>
          <div className="game-grid">
            {gamingData.casques.map((item) => (
              <Card key={item.id} item={item} categoryClass="casques-category" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GamingPage;