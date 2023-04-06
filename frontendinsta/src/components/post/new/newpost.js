import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import camera from "../../../images/camera.png";
import Logo from "../../../images/icon (1).svg"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./newpost.css"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
export default function NewPost() {
    const [formData,SetFormData]=useState({
        image:null,
        author:"",
        location:"",
        description:""
    })
    function captureForm(event){
        event.preventDefault()
        const formValues= new FormData(event.target);
    }
    return (
        
        <>
            <Navbar className="navbar-container">
                <Container>
                    <Navbar.Brand href="#home">
                        <span><img src={Logo} alt="logo" /></span>
                        <span>Instaclone</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <img src={camera} alt="camra logo" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="newpost-card-container">
                <Card style={{ width: '30rem' }}>
                   
                    <Card.Body>
                        <Form onSubmit={captureForm}>
                            <Form.Group controlId="formFile" name="image" className="mb-3">

                                <Form.Control type="file" />
                            </Form.Group>
                            <InputGroup className="mb-3">
                                <Form.Control aria-label="Author "name="author"placeholder="Author"/>
                                <Form.Control aria-label="Location" name="location" placeholder="Location"/>
                            </InputGroup>
                            <Form.Control type="text" name="description" placeholder="Description" />
                            <div id="post-button">
                            <Button  variant="primary" type="submit">
                                Post
                            </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}