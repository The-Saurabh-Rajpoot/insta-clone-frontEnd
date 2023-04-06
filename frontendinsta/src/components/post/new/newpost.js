import React, { useContext, useState } from "react";
import "./newpost.css"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Header from "../header/header";
import {addNewPost} from "../../../services/http-services.js"
import { useNavigate } from "react-router-dom";
import { postList } from "../../contexts/postcontext";
export default function NewPost() {
    const listNavigation=useNavigate();
    
    const [formData,SetFormData]=useState({
        image:null,
        author:"",
        location:"",
        description:""
    })
    function captureForm(event){
        event.preventDefault()
        const formValues= new FormData(event.target);
        formValues.append("data", new Date().toDateString());
        formValues.append("like", 0);
        formValues.append("id", new Date().getTime());
        addNewPost(formValues).then(res=>{
            addNewPost(res.data);
            SetFormData({
                image:null,
        author:"",
        location:"",
        description:""
            });
            listNavigation("post/all")
        }).catch(err=>console.log("failed to post data"));
    }
    return (
        
        <>
            <Header />
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