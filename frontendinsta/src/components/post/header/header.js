import camera from "../../../images/camera.png";
import Logo from "../../../images/icon (1).svg"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
export default function Header(){
    return(
        <>
        <Navbar className="navbar-container">
                <Container>
                    <Navbar.Brand href="#home">
                        <span><img src={Logo} alt="logo" /></span>
                        <span id="insta-clone-titel">Instaclone</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/post/new"><img src={camera} alt="camra logo" /></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </>
    )
}