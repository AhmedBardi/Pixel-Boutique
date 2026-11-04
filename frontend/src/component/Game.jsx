import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Game = ({game}) =>{
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={game.imageProd} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Détails</Button>
      </Card.Body>
    </Card>
  );
}

export default Game