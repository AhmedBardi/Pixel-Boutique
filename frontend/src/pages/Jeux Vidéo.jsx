import React from 'react';
import './Jeux Vidéo.css'; // Votre fichier CSS pour le style clair

const GameCard = ({ title, image, releaseYear }) => {
  return (
    <div className="game-card">
      <div className="image-container">
        <img 
          src={image} 
          alt={title} 
          className="game-image" 
          loading="lazy" 
        />
      </div>
      <div className="card-body">
        <h4 className="game-title" title={title}>{title}</h4>
        <p className="game-release">Sortie : {releaseYear}</p>
        <button className="card-button">Voir les détails</button>
      </div>
    </div>
  );
};

const ConsoleSection = ({ consoleName, titleClass, games }) => {
  return (
    <section className="console-section">
      <h3 className={`section-title ${titleClass}`}>
        Jeux {consoleName}
      </h3>
      <div className="game-grid">
        {games.map((game, index) => (
          <GameCard 
            key={index} 
            title={game.title} 
            image={game.image} 
            releaseYear={game.releaseYear} 
          />
        ))}
      </div>
    </section>
  );
};

const VideoGamesPage = () => {
  const playstationGames = [
    { 
      title: "God of War Ragnarök", 
      image: "https://plus.unsplash.com/premium_photo-1739704848885-ac24e6575b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29kJTIwb2YlMjBXYXIlMjBSYWduYXIlQzMlQjZrfGVufDB8fDB8fHww", 
      releaseYear: "2022" 
    },
    { 
      title: "Marvel's Spider-Man 2", 
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=80", 
      releaseYear: "2023" 
    },
    { 
      title: "The Last of Us Part II", 
      image: "https://images.unsplash.com/photo-1661715328941-7f359fd0c7a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwTGFzdCUyMG9mJTIwVXMlMjBQYXJ0JTIwSUl8ZW58MHx8MHx8fDA%3D", 
      releaseYear: "2020" 
    }
  ];

  const nintendoGames = [
    { 
      title: "The Legend of Zelda", 
      image: "https://plus.unsplash.com/premium_photo-1669075651770-8f5d88f8b452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhlJTIwTGVnZW5kJTIwb2YlMjBaZWxkYXxlbnwwfHwwfHx8MA%3D%3D", 
      releaseYear: "2023" 
    },
    { 
      title: "Super Mario Bros. Wonder", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnHt3nkN_c4fK4wNjO2eJ3vV0iPzd_avXqDp4NXKf-Q&s=10", 
      releaseYear: "2023" 
    },
    { 
      title: "Mario Kart 8 Deluxe", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6DmDCwWH3UxMNMAGwjXXzx0EEBZBsGgndNWWDJwVdQ&s=10", 
      releaseYear: "2017" 
    }
  ];

  const xboxGames = [
    { 
      title: "Halo Infinite", 
      image: "https://images.unsplash.com/photo-1738071665033-7ba9885c2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFsbyUyMEluZmluaXRlfGVufDB8fDB8fHww", 
      releaseYear: "2021" 
    },
    { 
      title: "Forza Horizon 5", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODS7MCPNhS2X3_ZVDNt6xpXEs7UO1WlZJTRVdgBKHQA&s=10", 
      releaseYear: "2021" 
    },
    { 
      title: "Starfield", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDekcR2bGpqWf2mM0DjL5nnb8OjqQPiyiSH88Ei2r6Ug&s=10", 
      releaseYear: "2023" 
    }
  ];

  return (
    <div className="page-container">
      <header className="header">
        <h1>Mon Catalogue de Jeux Vidéo</h1>
        <p>Découvrez une sélection des meilleurs titres par plateforme.</p>
      </header>

      <main className="main-content">
        <ConsoleSection consoleName="PlayStation" titleClass="title-playstation" games={playstationGames} />
        <ConsoleSection consoleName="Nintendo Switch" titleClass="title-nintendo" games={nintendoGames} />
        <ConsoleSection consoleName="Xbox" titleClass="title-xbox" games={xboxGames} />
      </main>
    </div>
  );
};

export default VideoGamesPage;