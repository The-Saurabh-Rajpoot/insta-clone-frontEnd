import React from "react";
import home from "../../images/lens.small.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../LandingComponent/landing.css";

export default function LandingPage(){
    return(
        
           
             <div className="landing-page-main-container">
                <Card className="home-content" style={{ width: '500px' }}>
             <Card.Img style={{ width: '18em' }} src={home} alt="Lens image" />
             <Card.Body className="card-body-container">
                <div className="card-body">
                <Card.Title style={{ color: '#006238',opacity: '1' }}>10x Team 04</Card.Title>
                 <Link to={"post/list"}><Button id="enter" variant="primary">Enter</Button></Link>
                </div>
                
               </Card.Body>
              </Card>


             </div>
            
        
    )
}
