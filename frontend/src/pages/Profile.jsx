import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ListGame from "../component/ListGame";

function Profile() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newProd, setNewProd] = useState({
    title: "",
    description: "",
    imageProd: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewProd({ ...newProd, [e.target.name]: e.target.value });
  };

//   console.log(newProd);
const handleAddProd=(e)=>{
    e.preventDefault()
    dispatch(addNewProd(newProd))
    handleClose()
    setNewProd({
    title: "",
    description: "",
    imageProd: "",
    price: "",
  })
}
useEffect(()=>{
  dispatch(getMyprod())
}, [dispatch])
const myProd = useSelector(state => state.prodReducer.MyProd)
// console.log(myProd)

  return (
    <div className="App">
      <Button variant="primary" onClick={handleShow}>
        Ajouter un produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Détail du nouveau produit</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddProd}>
        <Modal.Body>
          
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Titre..."
                name="title"
                value={newProd.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Description..."
                name="description"
                value={newProd.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Image Url..."
                name="imageProd"
                value={newProd.imageProd}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Prix..."
                name="price"
                value={newProd.price}
                onChange={handleChange}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">Add</Button>
        </Modal.Footer>
        </Form>
      </Modal>

    
    <ListGame products={myProd} />

    </div>
  );
}

export default Profile;