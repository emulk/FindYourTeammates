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
            <Col >
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
                {/**
                 * Ranking Players
                 * 
                 */}

                <Row >
                    <Col className="matchStyleAcordionRow playersRankingAccordion">
                        Players
                    </Col>
                </Row>

                <Row>
                    <Col className="matchStyleRow">
                        <Row>
                            <Col>
                                <BootstrapTable pagination search data={this.state.Players} striped={true} hover={true} bordered={true} >
                                    <TableHeaderColumn dataField="Id" dataAlign="center" dataSort={true}>#<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                    <TableHeaderColumn dataField="Tag" dataAlign="center" dataSort={true}>TAG<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                    <TableHeaderColumn dataField="Name" tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }} isKey={true} dataAlign="center" dataSort={true}>NAME<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                    <TableHeaderColumn dataField="Kills" dataAlign="center"  >KILLS</TableHeaderColumn>
                                    <TableHeaderColumn dataField="Death" dataAlign="center"  >DEATHS</TableHeaderColumn>
                                    <TableHeaderColumn dataField="KD" dataAlign="center" dataSort={true} >K/D<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                </BootstrapTable>

                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Col>
        );
    }
}

export default withRouter(PewPewCupComponent);