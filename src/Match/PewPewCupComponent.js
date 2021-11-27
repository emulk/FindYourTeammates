import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import './PewPewCupComponentStyle.css';

class PewPewCupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.SeasonOneClick = this.SeasonOneClick.bind(this);
        this.DiscordLink = this.DiscordLink.bind(this);

    }

    componentDidMount() {
    }


    SeasonOneClick() {
        let path = '/SeasonOne';
        this.props.history.push(path);
    }

    DiscordLink() {
        window.open("https://discord.gg/NSgGG3ta", "_blank")
    }

    render() {
        return (
            <Col className="pewpewcupaPage">
                <Row>

                    <Col xl={11} className="Season2Title">
                        Season 2
                    </Col>
                    <Col xl={1} onClick={this.SeasonOneClick} className="season1Link">
                        Season 1
                    </Col>
                </Row>
                <Row className="pewpewDescriptionRow">
                    <Col>
                        <img src="images/CloseArms041Uzi1Uzi.png" className="RobotImages" alt="Uzi" />
                    </Col>
                    <Col>
                        <Row>
                            <Col className="pewpewTitle">
                                PewPew European Cup
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pewpewDescription">
                                5v5 competitive Hyper Dash tournament
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.DiscordLink} variant="outline-info">
                                    <span className="joinDiscordButton">
                                        Join Us On Discord
                                    </span>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src="images/CloseArms140DefaultPistol0DefaultPistol.png" className="RobotImages" alt="Uzi" />
                    </Col>
                </Row>

                <Row >
                    <Col className="MatchTitle" >
                        Ranking
                    </Col>
                </Row>
                <Row>
                    <Col className="matchStyleRow">
                        <Row>
                            <Col>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Team</th>
                                            <th>Points</th>
                                            <th>Win</th>
                                            <th>Losses</th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                    </tbody>
                                </Table>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Col>
        );
    }
}

export default withRouter(PewPewCupComponent);