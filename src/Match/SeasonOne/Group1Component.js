import React, { Component } from 'react';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import PlayerRowComponent from '../PlayerRowComponent';
import './Group1ComponentStyle.css';

class Group1Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ServerRankingData: []
        };

        this.getUpdatedPlayerRankingData = this.getUpdatedPlayerRankingData.bind(this);
        this.handleData = this.handleData.bind(this);
        this.fillPlayersTable = this.fillPlayersTable.bind(this);
        this.getHeaderTable = this.getHeaderTable.bind(this);
        this.getMatchHeader = this.getMatchHeader.bind(this);
    }

    componentDidMount() {
        this.getUpdatedPlayerRankingData();
    }

    getUpdatedPlayerRankingData() {
        let url = "https://www.elegantweb.it/FindYourTeammates/HyperDashRanking/HyperDashRanking.php";
        let updatedTime = undefined;

        fetch(url)
            .then(response => response.text())
            .then(
                updatedTime => this.handleData(updatedTime)
            );
    }
    handleData(data) {
        if (data) {
            var players = new Array();
            var isHeader = true;
            var count = 0;
            JSON.parse(data).map((data1, index) => {
                if (!isHeader) {
                    var person = new Object();
                    person.Id = count;
                    person.Tag = data1[0];
                    person.Name = data1[1];
                    person.Kills = data1[2];
                    person.Death = data1[3];
                    person.KD = data1[4];
                    players.push(person)
                }
                isHeader = false;
                count++;
            });
            this.setState({
                Players: players
            })
        }
    }
    fillPlayersTable() {
        if (this.state.ServerRankingData.length > 0) {
            var count = 0;
            var isNotHeader = false;
            return this.state.ServerRankingData.map((AllData, index) => {
                if (isNotHeader) {
                    count++;
                    return (
                        <tr key={index} >
                            <td>{count}</td>
                            <td>{AllData[0]}</td>
                            <td>{AllData[1]}</td>
                            <td>{AllData[2]}</td>
                            <td>{AllData[3]}</td>
                            <td>{AllData[4]}</td>
                        </tr>
                    )
                }
                isNotHeader = true;

            })
        }
    }

    getHeaderTable() {
        return (
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>KILLS</th>
                <th>DEATHS</th>
                <th>K/D</th>
            </tr>
        );
    }

    getMatchHeader(team1, team2, score1, score2) {
        var trophy1 = [];
        var trophy2 = [];
        for (var i = 0; i < score1; i++) {
            trophy1.push(<FontAwesomeIcon icon={faTrophy} className="winingTrophy" />);
        }
        for (var i = 0; i < score2; i++) {
            trophy2.push(<FontAwesomeIcon icon={faTrophy} className="winingTrophy" />);
        }

        return (
            <Card.Header>
                <Accordion.Toggle as={Button} variant="light" eventKey="1">
                    <Row>
                        <Col className="matchStyleAcordionRow">
                            <span className="teamStyle">


                                {trophy1}
                                {team1}
                            </span>
                            <span className="vsStyle">
                                VS
                                </span>
                            <span className="teamStyle">
                                {team2}
                                {trophy2}
                            </span>

                            <Row>
                                <Col>
                                    <span className="teamStyle">
                                        {score1}
                                    </span>
                                    <span className="vsStyle">
                                        -
                                </span>
                                    <span className="teamStyle">
                                        {score2}
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Accordion.Toggle>
            </Card.Header>

        );
    }

    render() {
        const pagination = paginationFactory({
            page: 30
        });
        return (

            <>
                {/**
                 * Ranking Teams Group 1
                 * 
                 */}
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
                                        <tr>
                                            <td>1</td>
                                            <td>FRMG</td>
                                            <td>14</td>
                                            <td>8</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>MIX</td>
                                            <td>13</td>
                                            <td>9</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>BAGT</td>
                                            <td>5</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>FRIT</td>
                                            <td>4</td>
                                            <td>1</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>FECK</td>
                                            <td>3</td>
                                            <td>0</td>
                                            <td>4</td>
                                        </tr>


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
                                    <TableHeaderColumn dataField="Id"   dataAlign="center" dataSort={true}>#<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                    <TableHeaderColumn dataField="Tag" dataAlign="center" dataSort={true}>TAG<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                    <TableHeaderColumn dataField="Name" tdStyle={{whiteSpace: 'normal', wordWrap: 'break-word' }}  isKey={true} dataAlign="center" dataSort={true}>NAME<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                    <TableHeaderColumn dataField="Kills" dataAlign="center"  >KILLS</TableHeaderColumn>
                                    <TableHeaderColumn dataField="Death" dataAlign="center"  >DEATHS</TableHeaderColumn>
                                    <TableHeaderColumn dataField="KD" dataAlign="center" dataSort={true} >K/D<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                </BootstrapTable>

                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row><br /><br /></Row>

                {/**
                 * Matches Group 1
                 * 
                 */}

                <Row >
                    <Col className="MatchTitle" >
                        Match
                            </Col>
                </Row>



                <Accordion defaultActiveKey="0">
                    <Card>
                        {this.getMatchHeader("FRMG", "BAGT", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Launchpad

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    97%
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    87%
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Shen Rao, 79, 54"} />
                                                        <PlayerRowComponent stats={"2,Shangin, 68, 49"} />
                                                        <PlayerRowComponent stats={"3,Kasuo, 45, 65"} />
                                                        <PlayerRowComponent stats={"4,Toga280, 66, 38"} />
                                                        <PlayerRowComponent stats={"5,Oliver, 36, 56"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,MrT, 57, 68"} />
                                                        <PlayerRowComponent stats={"2,Mystikal, 55, 56"} />
                                                        <PlayerRowComponent stats={"3,Senigalt FR, 55, 47"} />
                                                        <PlayerRowComponent stats={"4,Tomcat, 47, 65"} />
                                                        <PlayerRowComponent stats={"5,Xeyh FR, 41, 61"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Domination Waterway
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Kasuo, 23, 29"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 44, 22"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 31, 33"} />
                                                        <PlayerRowComponent stats={"4,Oliver, 16, 33"} />
                                                        <PlayerRowComponent stats={"5,Toga280, 25, 15"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,MrT, 31, 32"} />
                                                        <PlayerRowComponent stats={"2,Mystikal, 33, 30"} />
                                                        <PlayerRowComponent stats={"3,Senigalt FR, 32, 29"} />
                                                        <PlayerRowComponent stats={"4,Tomcat, 18, 33"} />
                                                        <PlayerRowComponent stats={"5,Xeyh FR, 14, 20"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        {this.getMatchHeader("MIX", "FRIT", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Launchpad

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,tsar lewin HH, 74, 40"} />
                                                        <PlayerRowComponent stats={"2,Du.Boss, 77, 34"} />
                                                        <PlayerRowComponent stats={"3,Lucas, 60, 39"} />
                                                        <PlayerRowComponent stats={"4,Mavrodi, 44, 46"} />
                                                        <PlayerRowComponent stats={"5,Michael.SPEEN, 59, 53"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>

                                                        <PlayerRowComponent stats={"1,Bentama, 49, 64"} />
                                                        <PlayerRowComponent stats={"2,Alchemist FR, 48, 73"} />
                                                        <PlayerRowComponent stats={"3,Pandaroo, 48, 56"} />
                                                        <PlayerRowComponent stats={"4,Zio, 44, 59"} />
                                                        <PlayerRowComponent stats={"5,Soy, 19, 65"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Domination Waterway
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Mavrodi, 36, 29"} />
                                                        <PlayerRowComponent stats={"2,tsar lewin HH, 40, 12"} />
                                                        <PlayerRowComponent stats={"3,Du.Boss, 30, 21"} />
                                                        <PlayerRowComponent stats={"4,Michael.SPEEN, 24, 36"} />
                                                        <PlayerRowComponent stats={"5,sireos, 27, 26"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Alchemist FR, 22, 33"} />
                                                        <PlayerRowComponent stats={"2,Pandaroo, 29, 30"} />
                                                        <PlayerRowComponent stats={"3,Zio, 34, 28"} />
                                                        <PlayerRowComponent stats={"4,Bentama, 24, 35"} />
                                                        <PlayerRowComponent stats={"5,Soy, 15, 31"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        {this.getMatchHeader("FRMG", "FECK", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Canyon

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Shen Rao, 40, 25"} />
                                                        <PlayerRowComponent stats={"2,Shangin, 35, 21"} />
                                                        <PlayerRowComponent stats={"3,Kasuo, 32, 29"} />
                                                        <PlayerRowComponent stats={"4,Oliver, 16, 27"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Ted, 22, 31"} />
                                                        <PlayerRowComponent stats={"2,Stubbles, 29, 35"} />
                                                        <PlayerRowComponent stats={"3,Huayra, 35, 28"} />
                                                        <PlayerRowComponent stats={"4,Mindfill, 11, 30"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Domination Waterway
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Shangin, 29, 23"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 22, 13"} />
                                                        <PlayerRowComponent stats={"3,Oliver, 13, 22"} />
                                                        <PlayerRowComponent stats={"4,Kasuo, 11, 20"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Stubbles, 17, 25"} />
                                                        <PlayerRowComponent stats={"2,Ted, 29, 11"} />
                                                        <PlayerRowComponent stats={"3,Huayra, 18, 18"} />
                                                        <PlayerRowComponent stats={"4,Mindfill, 12, 21"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        {this.getMatchHeader("MIX", "FECK", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Launchpad

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Mavrodi, 33, 22"} />
                                                        <PlayerRowComponent stats={"2,Lucas, 24, 27"} />
                                                        <PlayerRowComponent stats={"3,Michael.SPEEN, 30, 24"} />
                                                        <PlayerRowComponent stats={"4,Linus, 33, 21"} />
                                                        <PlayerRowComponent stats={"5,Du.Boss, 20, 11"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Huayra, 24, 22"} />
                                                        <PlayerRowComponent stats={"2,Ted, 26, 29"} />
                                                        <PlayerRowComponent stats={"3,Mindfill, 19, 29"} />
                                                        <PlayerRowComponent stats={"4,Stubbles, 26, 31"} />
                                                        <PlayerRowComponent stats={"5,VickW, 2, 3"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Domination Waterway
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    2
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Mavrodi, 74, 80"} />
                                                        <PlayerRowComponent stats={"2,sireos, 66, 61"} />
                                                        <PlayerRowComponent stats={"3,Michael.SPEEN, 48, 86"} />
                                                        <PlayerRowComponent stats={"4,Lucas, 68, 73"} />
                                                        <PlayerRowComponent stats={"5,Du.Boss, 68, 42"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Stubbles, 78, 78"} />
                                                        <PlayerRowComponent stats={"2,Huayra, 75, 59"} />
                                                        <PlayerRowComponent stats={"3,Ted, 88, 60"} />
                                                        <PlayerRowComponent stats={"4,Mindfill,62, 59"} />
                                                        <PlayerRowComponent stats={"5,VickW,33, 70"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                <Row>
                                    <Col className="matchStyleAcordionRow">
                                        <span className="teamStyle">
                                            FRIT
                                                </span>
                                        <span className="vsStyle">
                                            VS
                                                </span>
                                        <span className="teamStyle">
                                            FRMG
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                        </span>
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    0
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    2
                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        Payload Canyon
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    42
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    100
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Zio, 58, 30"} />
                                                        <PlayerRowComponent stats={"2,Pandaroo, 45, 38"} />
                                                        <PlayerRowComponent stats={"3,Alchemist FR, 39, 61"} />
                                                        <PlayerRowComponent stats={"4,Pilou, 20, 52"} />
                                                        <PlayerRowComponent stats={"5,ZazOo FR, 15, 52"} />

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Toga280, 59, 18"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 46, 44"} />
                                                        <PlayerRowComponent stats={"3,Kasuo, 59, 41"} />
                                                        <PlayerRowComponent stats={"4,Shangin, 45, 31"} />
                                                        <PlayerRowComponent stats={"5,FR Oliver, 19, 48"} />

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        Domination Waterway
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Zio, 37, 25"} />
                                                        <PlayerRowComponent stats={"2,Pandaroo, 29, 18"} />
                                                        <PlayerRowComponent stats={"3,Alchemist FR, 18, 32"} />
                                                        <PlayerRowComponent stats={"4,Pilou, 18, 31"} />
                                                        <PlayerRowComponent stats={"5,ZazOo FR, 9, 34"} />

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Toga280, 21, 21"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 34, 19"} />
                                                        <PlayerRowComponent stats={"3,Kasuo, 27, 22"} />
                                                        <PlayerRowComponent stats={"4,Shangin, 39, 23"} />
                                                        <PlayerRowComponent stats={"5,FR Oliver, 15, 28"} />

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                <Row>
                                    <Col className="matchStyleAcordionRow">
                                        <span className="teamStyle">
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                                    FRIT
                                                </span>
                                        <span className="vsStyle">
                                            VS
                                                </span>
                                        <span className="teamStyle">
                                            BAGT
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                        </span>
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    2
                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Launchpad

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Alchemist FR, 72, 77"} />
                                                        <PlayerRowComponent stats={"2,Pandaroo, 62, 56"} />
                                                        <PlayerRowComponent stats={"3,Zio, 62, 47"} />
                                                        <PlayerRowComponent stats={"4,Soy, 32, 61"} />
                                                        <PlayerRowComponent stats={"5,ZazOo FR, 27, 56"} />

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,MrT, 70, 57"} />
                                                        <PlayerRowComponent stats={"2,Pain au Snipe, 61, 51"} />
                                                        <PlayerRowComponent stats={"3,Mystikal, 61, 56"} />
                                                        <PlayerRowComponent stats={"4,Seingalt FR, 67, 42"} />
                                                        <PlayerRowComponent stats={"5,Xeyh FR, 34, 60"} />

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        Domination Waterway
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>

                                                        <PlayerRowComponent stats={"1,Alchemist FR, 68, 70"} />
                                                        <PlayerRowComponent stats={"2,Pandaroo, 56, 51"} />
                                                        <PlayerRowComponent stats={"3,Zio, 58, 56"} />
                                                        <PlayerRowComponent stats={"4,Soy, 42, 59"} />
                                                        <PlayerRowComponent stats={"5,ZazOo FR, 28, 46"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>

                                                        <PlayerRowComponent stats={"1,Seingalt FR, 71, 60"} />
                                                        <PlayerRowComponent stats={"2,MrT, 56, 57"} />
                                                        <PlayerRowComponent stats={"3,Mystikal, 59, 55"} />
                                                        <PlayerRowComponent stats={"4,Xeyh FR, 39, 48"} />
                                                        <PlayerRowComponent stats={"5,Pain au Snipe, 57, 34"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        Control Point Stadium
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    298
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    300
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>

                                                        <PlayerRowComponent stats={"1,Alchemist FR, 42, 36"} />
                                                        <PlayerRowComponent stats={"2,Pandaroo, 25, 43"} />
                                                        <PlayerRowComponent stats={"3,Zio, 40, 22"} />
                                                        <PlayerRowComponent stats={"4,Soy, 19, 40"} />
                                                        <PlayerRowComponent stats={"5,ZazOo FR, 15, 33"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>

                                                        <PlayerRowComponent stats={"1,Xeyh FR, 22, 34"} />
                                                        <PlayerRowComponent stats={"2,MrT, 36, 27"} />
                                                        <PlayerRowComponent stats={"3,Pain au Snipe, 38, 26"} />
                                                        <PlayerRowComponent stats={"4,Mystikal, 35, 30"} />
                                                        <PlayerRowComponent stats={"5,Seingalt FR, 43, 24"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                <Row>
                                    <Col className="matchStyleAcordionRow">
                                        <span className="teamStyle">
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                                    MIX
                                                </span>
                                        <span className="vsStyle">
                                            VS
                                                </span>
                                        <span className="teamStyle">
                                            CHAV
                                                    </span>
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    2
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    0
                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Canion

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Mavrodi, 42, 27"} />
                                                        <PlayerRowComponent stats={"2,Du.Boss, 33, 22"} />
                                                        <PlayerRowComponent stats={"3,Lucas, 23, 30"} />
                                                        <PlayerRowComponent stats={"4,hellhunter, 23, 33"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Stream, 28, 25"} />
                                                        <PlayerRowComponent stats={"2,Nobel, 31, 33"} />
                                                        <PlayerRowComponent stats={"3,sireos 9V, 26, 31"} />
                                                        <PlayerRowComponent stats={"4,Rob, 25, 34"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Domination Waterway
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Mavrodi, 17, 11"} />
                                                        <PlayerRowComponent stats={"2,Du.Boss, 16, 12"} />
                                                        <PlayerRowComponent stats={"3,Lucas, 14, 11"} />
                                                        <PlayerRowComponent stats={"4,tsar lewin HH, 14, 3"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Nobel, 9, 16"} />
                                                        <PlayerRowComponent stats={"2,Rob, 7, 18"} />
                                                        <PlayerRowComponent stats={"3,Stream, 12, 11"} />
                                                        <PlayerRowComponent stats={"4,sireos 9V, 9, 18"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                <Row>
                                    <Col className="matchStyleAcordionRow">
                                        <span className="teamStyle">
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                                    MIX
                                                </span>
                                        <span className="vsStyle">
                                            VS
                                                </span>
                                        <span className="teamStyle">
                                            FRMG
                                                    <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        </span>

                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    2
                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                                Payload Launchpad

                                                <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,nv Tom0910, 73, 77"} />
                                                        <PlayerRowComponent stats={"2,Du.Boss, 70, 50"} />
                                                        <PlayerRowComponent stats={"3,Lucas, 51, 70"} />
                                                        <PlayerRowComponent stats={"4,Michael.SPEEN, 56, 73"} />
                                                        <PlayerRowComponent stats={"5,sireos, 39, 67"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Shen Rao, 83, 68"} />
                                                        <PlayerRowComponent stats={"2,Kasuo, 70, 69"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 75, 44"} />
                                                        <PlayerRowComponent stats={"4,Toga280, 70, 40"} />
                                                        <PlayerRowComponent stats={"5,FR Olivier, 33, 73"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>




                                <Row>
                                    <Col className="mapsStyle">
                                        Domination Waterway
                                                <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    2
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Michael.SPEEN, 48, 54"} />
                                                        <PlayerRowComponent stats={"2,nv Tom0910, 44, 48"} />
                                                        <PlayerRowComponent stats={"3,sireos, 44, 57"} />
                                                        <PlayerRowComponent stats={"4,Du.Boss, 58, 26"} />
                                                        <PlayerRowComponent stats={"5,hellhunet, 27, 57"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Kasuo, 36, 46"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 73, 43"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 53, 58"} />
                                                        <PlayerRowComponent stats={"4,Toga280, 53, 25"} />
                                                        <PlayerRowComponent stats={"5,FR Olivier, 26, 52"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>



                                <Row>
                                    <Col className="mapsStyle">
                                        Elimination The Pit
                                                <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Du.Boss, 25, 28"} />
                                                        <PlayerRowComponent stats={"2,Michael.SPEEN, 30, 28"} />
                                                        <PlayerRowComponent stats={"3,nv Tom0910, 18, 32"} />
                                                        <PlayerRowComponent stats={"4,hellhunet, 22, 30"} />
                                                        <PlayerRowComponent stats={"5,sireos, 8, 30"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Shen Rao, 40, 18"} />
                                                        <PlayerRowComponent stats={"2,Toga280, 37, 24"} />
                                                        <PlayerRowComponent stats={"3,Kasuo, 20, 22"} />
                                                        <PlayerRowComponent stats={"4,Shangin, 28, 24"} />
                                                        <PlayerRowComponent stats={"5,FR Olivier, 18, 21"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                <Row>
                                    <Col className="matchStyleAcordionRow">
                                        <span className="teamStyle">
                                            BAGT
                                        </span>
                                        <span className="vsStyle">
                                            VS
                                        </span>
                                        <span className="teamStyle">
                                            MIX
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                            <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        </span>

                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    0
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    2
                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>


                                <Row>
                                    <Col className="mapsStyle">
                                        Payload Launchpad
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    1
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>KILLS</th>
                                                            <th>DEATHS</th>
                                                            <th>SCORE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Seingalt FR</td>
                                                            <td>84</td>
                                                            <td>47</td>
                                                            <td>9609</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Mystikal</td>
                                                            <td>76</td>
                                                            <td>53</td>
                                                            <td>8928</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>MrT</td>
                                                            <td>58</td>
                                                            <td>61</td>
                                                            <td>8086</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Tomcat</td>
                                                            <td>46</td>
                                                            <td>62</td>
                                                            <td>6368</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Xeyh FR</td>
                                                            <td>38</td>
                                                            <td>53</td>
                                                            <td>4511</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>KILLS</th>
                                                            <th>DEATHS</th>
                                                            <th>SCORE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Du.Boss</td>
                                                            <td>66</td>
                                                            <td>47</td>
                                                            <td>8130</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Michael.SPEEN</td>
                                                            <td>61</td>
                                                            <td>75</td>
                                                            <td>8000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Mavrodi</td>
                                                            <td>49</td>
                                                            <td>56</td>
                                                            <td>6942</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Lucas</td>
                                                            <td>52</td>
                                                            <td>66</td>
                                                            <td>6540</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>hellhunter</td>
                                                            <td>48</td>
                                                            <td>64</td>
                                                            <td>5366</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mapsStyle">
                                        Domination Waterway
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    0
                                                        </span>
                                                <span className="vsStyle">
                                                    -
                                                        </span>
                                                <span className="teamStyle">
                                                    3
                                                        </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>KILLS</th>
                                                            <th>DEATHS</th>
                                                            <th>SCORE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Seingalt FR</td>
                                                            <td>14</td>
                                                            <td>26</td>
                                                            <td>5501</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Xeyh FR</td>
                                                            <td>20</td>
                                                            <td>13</td>
                                                            <td>5103</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>MrT</td>
                                                            <td>22</td>
                                                            <td>25</td>
                                                            <td>4555</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Tomcat</td>
                                                            <td>18</td>
                                                            <td>20</td>
                                                            <td>4254</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Mystikal</td>
                                                            <td>21</td>
                                                            <td>24</td>
                                                            <td>3158</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>KILLS</th>
                                                            <th>DEATHS</th>
                                                            <th>SCORE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mavrodi</td>
                                                            <td>21</td>
                                                            <td>22</td>
                                                            <td>6236</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>hellhunter</td>
                                                            <td>20</td>
                                                            <td>22</td>
                                                            <td>5536</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Lucas</td>
                                                            <td>28</td>
                                                            <td>20</td>
                                                            <td>5210</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Michael.SPEEN</td>
                                                            <td>12</td>
                                                            <td>24</td>
                                                            <td>3852</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>Du.Boss</td>
                                                            <td>25</td>
                                                            <td>9</td>
                                                            <td>3602</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </>
        );
    }
}

export default Group1Component;