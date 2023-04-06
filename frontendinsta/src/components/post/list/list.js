import React from "react";
import "./list.css";
import Header from "../header/header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ThreeDots from "../../../images/more_icon (1).svg";
import sampleImage from "../../../images/download.jpeg";
import heart from "../../../images/heart.png";
import share from "../../../images/share.png"
export default function List() {
    const date = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-IN', options);
    return (
        <>
            <Header />
            <div className="list-all-container">
                <div className="col-4 post-indi">
                    <Card className="text-center">
                        <Card.Header>
                            <div className="left-div">
                                <h4>Shiva</h4>
                                <label>Benglaru</label>
                            </div>
                            <span className="right-div">
                                <img src={ThreeDots} />
                            </span>

                        </Card.Header>
                        <Card.Body className="image-container">
                            <img className="image" src={sampleImage} />
                        </Card.Body>
                        <Card.Footer >

                            <section className="div-1">
                                <span className="heart">
                                    <img src={heart} alt="heart" />


                                </span>
                                <span className="share">
                                    <img src={share} alt="share" />
                                </span>
                                <span className="date-span">{formattedDate}</span>

                            </section>
                            <section id="likes">
                                <label>64 likes</label>
                            </section>
                            <section id="description">
                                <h5>some descriptin</h5>
                            </section>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-4 post-indi">
                    <Card className="text-center">
                        <Card.Header>
                            <div className="left-div">
                                <h4>Shiva</h4>
                                <label>Benglaru</label>
                            </div>
                            <span className="right-div">
                                <img src={ThreeDots} />
                            </span>

                        </Card.Header>
                        <Card.Body className="image-container">
                            <img className="image" src={sampleImage} />
                        </Card.Body>
                        <Card.Footer >

                            <section className="div-1">
                                <span className="heart">
                                    <img src={heart} alt="heart" />


                                </span>
                                <span className="share">
                                    <img src={share} alt="share" />
                                </span>
                                <span className="date-span">{formattedDate}</span>

                            </section>
                            <section id="likes">
                                <label>64 likes</label>
                            </section>
                            <section id="description">
                                <h5>some descriptin</h5>
                            </section>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    )
}