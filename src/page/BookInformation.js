import React from 'react'
import { useLocation } from "react-router-dom";
import Header from '../Book/Header';
import BannerBook from '../component/BannerBook'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const BookInformation = () => {
    const title = useLocation().state.name
    const prix = useLocation().state.prix
    const auteur = useLocation().state.auteur
    const locateur = useLocation().state.locateur
    const description = useLocation().state.description
    const reservation = useLocation().state.reservation
    const categorie = useLocation().state.categorie

    
  return (
    <>
    <Header/>
    <BannerBook/>

   <div class=" d-flex">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><p> Auteur :</p> {auteur}</ListGroup.Item>
        <ListGroup.Item><p> Prix :</p> {prix}</ListGroup.Item>
        <ListGroup.Item><p>categorie :</p>{categorie}</ListGroup.Item>
      </ListGroup>
      
    </Card>
    </div>


    </>
  )
}

export default BookInformation