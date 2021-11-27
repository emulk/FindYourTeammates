import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './MapsComponentStyle.css';

class MapsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }




    render() {
        return (
            <Col className="tableEuropeanCol">
                <Row className="tableEuropeanTitle">
                    Maps
                </Row>
                <Row>
                    <Col>
                        <Row className="titleSection">
                            Domination: Waterway and Quarry
                        </Row>
                        <Row>
                            <p>Maps have buttons A, B, and C, with team spawns near both A and C and the B button in the middle. </p>
                            <p>Each team (red and blue) tries to hit and hold all three buttons for the full countdown (5 seconds) to win a point.</p>
                            <p>If you are dead when the other team is holding all three buttons, you're locked out of respawning unless a teammate counters.</p>
                            <p>First team to three points wins. If 25 minutes elapses before then, the team with more points wins.</p>
                            <p>If it's tied after 25 minutes, there is a sudden death where only the B button is active and there are no respawns.</p>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="titleSection">
                                    Domination Waterway
                                </Row>
                                <Row>
                                    <img src="images/Waterway.jpg" className="maps" alt="Waterway" />
                                </Row>
                            </Col>
                            <Col>
                                <Row className="titleSection">
                                    Domination Quarry
                                </Row>
                                <Row>
                                    <img src="images/Quarry.jpg" className="maps" alt="Quarry" />
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="titleSection">
                            Payload: Canyon and Launchpad
                        </Row>
                        <Row>
                            <p>Maps have a cart.</p>
                            <p>Blue team pushes the cart, which only moves when you're on it (and it moves faster if two or three people get on, more on this in the tips below).</p>
                            <p>Red team tries to stop them.</p>
                            <p>You have six minutes to get past the checkpoint in the middle, and if you do, you get another six minutes (on top of whatever time you had left before hitting checkpoint) to reach the end goal.</p>
                            <p>The teams switch colors and the team that was just defending (red) pushes the cart (blue).</p>
                            <p>Whoever gets it farther wins, and if the first team doesn’t reach the end the game sets up a "goal" for the second team to hit to win (based on where the first team was stopped).</p>
                            <p>If both teams make it all the way to the end, it's a draw (but in Dash League, whichever team had more time left wins).</p>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="titleSection">
                                    Payload Canyon
                                </Row>
                                <Row>
                                    <img src="images/Canyon.jpg" className="maps" alt="Canyon" />
                                </Row>
                            </Col>
                            <Col>
                                <Row className="titleSection">
                                    Payload Launchpad
                                </Row>
                                <Row>
                                    <img src="images/Launchpad.jpg" className="maps" alt="Launchpad" />
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="titleSection">
                            Control Point: Stadium
                        </Row>
                        <Row>
                            <p>Control Point has a single button in the middle and the two teams fight to be the first to hold it for a cumulative total of 300 seconds (or 5 minutes).</p>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="titleSection">
                                    <Col>
                                        Control Point Stadium
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src="images/Stadium.jpg" className="maps" alt="Stadium" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="titleSection">
                            Death Match
                        </Row>
                        <Row>
                            <p>Death Match Metropolis is every player for themselves, first player to collect 50 kills is the winner.</p>
                            <p>TDM is a 5 vs 5 death match, the firs team to collect a 100 kills win.</p>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="titleSection">
                                    <Col>
                                        Death Match Metropolis
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src="images/Metropolis.jpg" className="maps" alt="Metropolis" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                            <Row className="titleSection">
                                    <Col>
                                        Team Death Match
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src="images/tdm.png" className="maps" alt="TDM" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="titleSection">
                            Elimination: The Pit and Rig
                        </Row>
                        <Row>

                        </Row>
                        <Row>
                            <Col>
                                <Row className="titleSection">
                                    Elimination Rig
                                </Row>
                                <Row>
                                    <img src="images/EliminationRig.png" className="maps" alt="Rig" />
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="titleSection">
                            Capture The Flag: Coast
                        </Row>
                        <Row>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="titleSection">
                                    <Col>
                                    Capture The Flag: Coast
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Col>
        );
    }
}

export default MapsComponent;