import React from 'react';
import './App.css';
import 'bootstrap-css-only';
import {Image, Card, Button} from 'react-bootstrap';
// Import image and video assets
import * as Assets from "./assets";

class App extends React.Component {
    state = {darkTheme: false};

    handleClick() {
        this.setState({darkTheme: !this.state.darkTheme});
    }

    render() {
        const {darkTheme} = this.state;

        return (
            <div className={darkTheme ? 'App text-light' : 'App'}>
                {/* Header */}
                <div className={darkTheme ? "headerSection headerSectionDark" : "headerSection"}>
                    <div className="header">

                        <div className="mainImageSizer">
                            <Image src={Assets.WilliamImg} thumbnail roundedCircle fluid />
                        </div>

                        <h2 className="myName">William Garvey</h2>
                    </div>
                </div>

                {/* Info Section*/}
                <div className={darkTheme ? 'infoSection bg-secondary' : 'infoSection'}>
                    <div className={darkTheme ? 'info shadow p-3 bg-dark' : 'info shadow p-3'}
                         style={{position: "relative"}}>


                        <Button
                            variant={darkTheme ? "outline-info" : "outline-secondary"}
                            value={1} onClick={this.handleClick.bind(this)}>
                            Dark Theme
                        </Button>

                        <div className="border-top my-3"/>

                        {/* ========== EDUCATION SECTION ========== */}
                        <h2>Education</h2>
                        <h5>B.S. in Computer Science, 2018</h5>
                        <p>
                            George Mason University
                            <br/>
                            Magna cum laude, GPA: 3.8
                        </p>

                        <div className="border-top my-3"/>

                        {/* ========== CERTS ========== */}
                        <h2>Certifications</h2>
                        <h5>AWS Certified Developer - Associate</h5>
                        <p>Received January 6, 2019</p>

                        <h5>AWS Certified Solutions Architect - Associate</h5>
                        <p>Received January 5, 2019</p>

                        <div className="border-top my-3"/>

                        {/* ========== PROJECTS SECTION ========== */}
                        <h2>Personal Projects</h2>


                        {/* ========== TRYVOLUTION ========== */}
                        <h5>Tryvolution</h5>
                        <a target="_blank" rel="noopener noreferrer" href="https://tryvolution.com/">tryvolution.com</a>
                        <p>
                            Tryvolution is a web app I created in React that triangulates an image in browser by using
                            evolutionary strategies.
                            It works by generating a grid of connected triangles, then slowly tweaks the triangles until
                            they look more like an image.
                            Colors of a triangle are generated by averaging the pixels under the triangle.
                        </p>
                        <p>Custom rendering and evolutionary implementation.</p>


                        {/* ========== PENGUIN MEDIA ========== */}
                        <div className="centerCards">
                            <Card style={{width: '24rem', minWidth: "300px"}}>
                                <Card.Img variant="top" src={Assets.EvolvedPenguinImg}/>
                                <Card.Footer>Penguin evolved 10,000 generations</Card.Footer>
                            </Card>

                            <div className="p-1"/>

                            <Card style={{width: '24rem', minWidth: "300px"}}>
                                <Card.Img variant="top" src={Assets.OrigPenguinImg} width="500px"/>
                                <Card.Footer>Original penguin image</Card.Footer>
                            </Card>
                        </div>
                        <p/>


                        {/* ========== MONA LISA MEDIA ========== */}
                        <div className="centerCards">
                            <Card style={{width: '18rem', minWidth: "300px"}}>
                                <Card.Img variant="top" src={Assets.EvolvedMonaLisaImg}/>
                                <Card.Footer>Mona Lisa evolved 5,000 generations</Card.Footer>
                            </Card>

                            <div className="p-1"/>

                            <Card style={{width: '18rem', minWidth: "300px"}}>
                                <Card.Img variant="top" src={Assets.OrigMonaImg}/>
                                <Card.Footer>Original Mona Lisa image</Card.Footer>
                            </Card>
                        </div>

                        <br/>
                        <div className="border-top my-3"/>


                        {/* ========== MBLASTER ========== */}
                        <h5>MBlaster</h5>
                        <a target="_blank" rel="noopener noreferrer" href="https://mblaster-2af05.web.app/">mblaster-2af05.web.app/</a>
                        <p>
                            MBlaster is a single player web app game where a user controls a circle to bounce another
                            circle
                            into minerals.
                            It features 3 levels, some with gravitational and repulsive effects. Uses React.
                        </p>
                        <p>
                            Inspired by early game <a target="_blank" rel="noopener noreferrer"
                                                      href="https://en.wikipedia.org/wiki/Breakout_(video_game)">breakout</a>.
                        </p>

                        {/* ========== MBLASTER & BREAKOUT MEDIA ========== */}


                        <div className="centerCards">
                            <Card style={{width: '24rem', minWidth: "300px"}}>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="Mblaster video" className="embed-responsive-item" src={Assets.MBlasterSampleVid} allowFullScreen/>
                                </div>
                                <Card.Footer>Clip of the first level of MBlaster</Card.Footer>
                            </Card>

                            <div className="p-2"/>

                            <Card style={{width: '24rem', minWidth: "300px"}}>
                                <div>
                                    <Image src="https://upload.wikimedia.org/wikipedia/en/2/2b/Breakout2600.svg"
                                           width={"100%"}
                                           fluid/>
                                </div>
                                <Card.Footer>Image of original Atari Breakout Game</Card.Footer>
                            </Card>
                        </div>

                        <br/>
                        <div className="border-top my-3"/>


                        {/* ========== PYTHON PHYSICS ========== */}
                        <h5>AABB Physics Engine</h5>
                        <p>
                            A physics engine written in <b>python</b> that simulates physics with axis-axigned boxes (no
                            rotation).
                            More information <a target="_blank" rel="noopener noreferrer"
                                                href="https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box">here</a>.
                        </p>
                        <p>
                            Two physics objects exist: concrete and entity. Entity designed for game entities like
                            players,
                            items, particles, and concrete for immovable objects that entities interact (ground and so
                            on).
                            Other features include friction, air resistance, and coefficient of restitution.
                        </p>
                        <div className="d-flex justify-content-center">
                            <Card style={{width: '30rem'}}>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="physics demo" className="embed-responsive-item" src={Assets.PhysicsDemo} allowFullScreen/>
                                </div>
                                <Card.Footer>Physics Engine Demonstration</Card.Footer>
                            </Card>
                        </div>

                        <br/>
                        <div className="border-top my-3"/>


                        {/* ========== PYTHON PHYSICS ========== */}
                        <h5>Old Website</h5>
                        <p>I thought I would put this here for fun. Here is my old website, very early into web dev.</p>
                        <a target="_blank" rel="noopener noreferrer" href="http://mason.gmu.edu/~wgarvey/">old website</a>


                    </div>
                </div>
            </div>
        );
    }
}

export default App;
