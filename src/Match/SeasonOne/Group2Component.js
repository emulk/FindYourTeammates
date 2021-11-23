import React, { Component } from 'react';
import { Table, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import PlayerRowComponent from '../PlayerRowComponent';
import '../PewPewCupComponentStyle.css';

class Group2Component extends Component {
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
        this.numericSortFunc = this.numericSortFunc.bind(this);

    }

    componentDidMount() {
        this.getUpdatedPlayerRankingData();
    }

    getUpdatedPlayerRankingData() {
        let url = "https://www.elegantweb.it/FindYourTeammates/HyperDashRanking/HyperDashRankingGroup2.php";
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

    numericSortFunc(a, b, order) {
        debugger;
        if (order === 'desc') {
            return Number(b.price) - Number(a.price);
        } else {
            return Number(a.price) - Number(b.price);
        }
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
        return (
            <>
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
                                            <td>NORD </td>
                                            <td>18</td>
                                            <td>12</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>TULP</td>
                                            <td>14</td>
                                            <td>10</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>PZZA</td>
                                            <td>10</td>
                                            <td>7</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>OLE!</td>
                                            <td>8</td>
                                            <td>6</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>VIN</td>
                                            <td>6</td>
                                            <td>4</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>PG</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>TEA</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>

                    </Col>
                </Row>

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
                                    <TableHeaderColumn dataField="Kills" dataAlign="center" >KILLS</TableHeaderColumn>
                                    <TableHeaderColumn dataField="Death" dataAlign="center"  >DEATHS</TableHeaderColumn>
                                    <TableHeaderColumn dataField="KD" dataAlign="center" dataSort={true} >K/D<FontAwesomeIcon icon={faSort} className="sortIcon" /></TableHeaderColumn>
                                </BootstrapTable>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row><br /><br /></Row>
                <Row >
                    <Col className="MatchTitle" >
                        Match
                    </Col>
                </Row>
                <Accordion defaultActiveKey="0">
                    <Card>
                        {this.getMatchHeader("TULP", "PZZA", 2, 1)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Launchpad
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    100%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    88%
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
                                                        <PlayerRowComponent stats={"1,Skimoes, 101, 58"} />
                                                        <PlayerRowComponent stats={"2,Himitsu, 76, 47"} />
                                                        <PlayerRowComponent stats={"3,ThundrDog, 60, 58"} />
                                                        <PlayerRowComponent stats={"4,Marcel, 45, 64"} />
                                                        <PlayerRowComponent stats={"5,Heis, 54, 54"} />
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
                                                        <PlayerRowComponent stats={"1,f3g4t0, 58, 73"} />
                                                        <PlayerRowComponent stats={"2,Rock, 51, 76"} />
                                                        <PlayerRowComponent stats={"3,Time, 55, 65"} />
                                                        <PlayerRowComponent stats={"4,Taxi, 52, 63"} />
                                                        <PlayerRowComponent stats={"5,Emulk, 47, 65"} />

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
                                                        <PlayerRowComponent stats={"1,Monkey, 29, 34"} />
                                                        <PlayerRowComponent stats={"2,ThundrDog, 31, 33"} />
                                                        <PlayerRowComponent stats={"3,Heis, 25, 26"} />
                                                        <PlayerRowComponent stats={"4,Skimoes, 36, 20"} />
                                                        <PlayerRowComponent stats={"5,Shapes, 10, 28"} />
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

                                                        <PlayerRowComponent stats={"1,f3g4t0, 26, 36"} />
                                                        <PlayerRowComponent stats={"2,Time, 38, 26"} />
                                                        <PlayerRowComponent stats={"3,Taxi, 32, 29"} />
                                                        <PlayerRowComponent stats={"4,Marini, 20, 17"} />
                                                        <PlayerRowComponent stats={"5,Rock, 22, 26"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Control Point Stadium
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    300
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    215
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
                                                        <PlayerRowComponent stats={"1,Monkey, 28, 26"} />
                                                        <PlayerRowComponent stats={"2,Heis, 22, 24"} />
                                                        <PlayerRowComponent stats={"3,Skimoes, 53, 17"} />
                                                        <PlayerRowComponent stats={"4,ThundrDog, 27, 19"} />
                                                        <PlayerRowComponent stats={"5,Himitsu, 25, 28"} />
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

                                                        <PlayerRowComponent stats={"1,Taxi, 19, 35"} />
                                                        <PlayerRowComponent stats={"2,f3g4t0, 20, 32"} />
                                                        <PlayerRowComponent stats={"3,Time, 28, 35"} />
                                                        <PlayerRowComponent stats={"4,Emulk, 27, 27"} />
                                                        <PlayerRowComponent stats={"5,Marini, 20, 26"} />
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
                        {this.getMatchHeader("PG", "TEA", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Launchpad
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    89%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    86%
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
                                                        <PlayerRowComponent stats={"1,jueviolegrace, 92, 47"} />
                                                        <PlayerRowComponent stats={"2,Leeboys, 87, 49"} />
                                                        <PlayerRowComponent stats={"3,SaberQuest, 69, 62"} />
                                                        <PlayerRowComponent stats={"4,Russta, 40, 62"} />
                                                        <PlayerRowComponent stats={"5,Birky, 39, 57"} />
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
                                                        <PlayerRowComponent stats={"1,RaspiBox BB, 79, 71"} />
                                                        <PlayerRowComponent stats={"2,SmegHead BB, 74, 64"} />
                                                        <PlayerRowComponent stats={"3,Shrike, 54, 63"} />
                                                        <PlayerRowComponent stats={"4,uk.koala, 41, 72"} />
                                                        <PlayerRowComponent stats={"5,SatanSlayer, 22, 60"} />

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
                                                        <PlayerRowComponent stats={"1,jueviolegrace, 49, 26"} />
                                                        <PlayerRowComponent stats={"2,Leeboys, 39, 29"} />
                                                        <PlayerRowComponent stats={"3,SaberQuest, 27, 25"} />
                                                        <PlayerRowComponent stats={"4,Emzion BB, 23, 29"} />
                                                        <PlayerRowComponent stats={"5,Russta, 26, 8"} />

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
                                                        <PlayerRowComponent stats={"1,Shrike, 38, 25"} />
                                                        <PlayerRowComponent stats={"2,RaspiBox BB, 28, 38"} />
                                                        <PlayerRowComponent stats={"3,SmegHead BB, 25, 39"} />
                                                        <PlayerRowComponent stats={"4,Gold Memba, 14, 35"} />
                                                        <PlayerRowComponent stats={"5,SatanSlayer, 8, 30"} />
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
                        {this.getMatchHeader("PZZA", "VIN", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
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
                                                        <PlayerRowComponent stats={"1,f3g4t0, 22, 33"} />
                                                        <PlayerRowComponent stats={"2,Taxi, 18, 26"} />
                                                        <PlayerRowComponent stats={"3,Time, 24, 26"} />
                                                        <PlayerRowComponent stats={"4,Rock, 21, 18"} />
                                                        <PlayerRowComponent stats={"5,Marini, 8, 17"} />
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
                                                        <PlayerRowComponent stats={"1,Bruh, 25, 26"} />
                                                        <PlayerRowComponent stats={"2,Pythyu, 11, 20"} />
                                                        <PlayerRowComponent stats={"3,Lilfeeze, 35, 12"} />
                                                        <PlayerRowComponent stats={"4,alexis2m, 22, 20"} />
                                                        <PlayerRowComponent stats={"5,RAFIKI, 25, 18"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

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
                                                        <PlayerRowComponent stats={"1,f3g4t0, 49, 73"} />
                                                        <PlayerRowComponent stats={"2,Taxi, 65, 64"} />
                                                        <PlayerRowComponent stats={"3,Time, 65, 70"} />
                                                        <PlayerRowComponent stats={"4,Emulk, 48, 62"} />
                                                        <PlayerRowComponent stats={"5,IaiaT, 51, 51"} />
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
                                                        <PlayerRowComponent stats={"1,Bruh, 63, 61"} />
                                                        <PlayerRowComponent stats={"2,Pythyu, 42, 55"} />
                                                        <PlayerRowComponent stats={"3,Lilfeeze, 91, 65"} />
                                                        <PlayerRowComponent stats={"4,alexis2m, 58, 60"} />
                                                        <PlayerRowComponent stats={"5,RAFIKI, 58, 46"} />

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
                        {this.getMatchHeader("VIN", "OLE!", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Launchpad
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    98%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    86%
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
                                                        <PlayerRowComponent stats={"1,Bruh, 67, 64"} />
                                                        <PlayerRowComponent stats={"2,Lilfeeze, 76, 55"} />
                                                        <PlayerRowComponent stats={"3,RAFIKI, 68, 48"} />
                                                        <PlayerRowComponent stats={"4,Dje-unit, 55, 56"} />
                                                        <PlayerRowComponent stats={"5,alexis2m, 54, 64"} />
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
                                                        <PlayerRowComponent stats={"1,elgambitero, 70, 69"} />
                                                        <PlayerRowComponent stats={"2,Dough Dough, 57, 67"} />
                                                        <PlayerRowComponent stats={"3,StJokira, 56, 65"} />
                                                        <PlayerRowComponent stats={"4,amospalla, 61, 60"} />
                                                        <PlayerRowComponent stats={"5,Neodvd, 39, 68"} />
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
                                                        <PlayerRowComponent stats={"1,Bruh, 68, 66"} />
                                                        <PlayerRowComponent stats={"2,Lilfeeze, 62, 18"} />
                                                        <PlayerRowComponent stats={"3,RAFIKI, 29, 51"} />
                                                        <PlayerRowComponent stats={"4,Dje-unit, 53, 39"} />
                                                        <PlayerRowComponent stats={"5,alexis2m, 47, 55"} />

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
                                                        <PlayerRowComponent stats={"1,elgambitero, 61, 66"} />
                                                        <PlayerRowComponent stats={"2,Dough Dough, 63, 45"} />
                                                        <PlayerRowComponent stats={"3,Mendiaco, 16, 42"} />
                                                        <PlayerRowComponent stats={"4,amospalla, 62, 65"} />
                                                        <PlayerRowComponent stats={"5,Neodvd, 23, 48"} />

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
                        {this.getMatchHeader("TULP", "TEA", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Canyon
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    97%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    49%
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
                                                        <PlayerRowComponent stats={"1,Skimoes, 90, 44"} />
                                                        <PlayerRowComponent stats={"2,Himitsu, 48, 57"} />
                                                        <PlayerRowComponent stats={"3,Heis, 41, 49"} />
                                                        <PlayerRowComponent stats={"4,ThundrDog, 48, 53"} />
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
                                                        <PlayerRowComponent stats={"1,Shrike, 64, 60"} />
                                                        <PlayerRowComponent stats={"2,RaspiBox BB, 64, 57"} />
                                                        <PlayerRowComponent stats={"3,SmegHead BB, 48, 64"} />
                                                        <PlayerRowComponent stats={"4,SatanSlayer, 26, 49"} />
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
                                                        <PlayerRowComponent stats={"1,Himitsu, 13, 15"} />
                                                        <PlayerRowComponent stats={"2,Skimoes, 17, 6"} />
                                                        <PlayerRowComponent stats={"3,Monkey, 17, 14"} />
                                                        <PlayerRowComponent stats={"4,Shapes, 8, 15"} />
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
                                                        <PlayerRowComponent stats={"1,RaspiBox BB, 20, 14"} />
                                                        <PlayerRowComponent stats={"2,Shrike, 15, 9"} />
                                                        <PlayerRowComponent stats={"3,SmegHead BB, 11, 19"} />
                                                        <PlayerRowComponent stats={"4,SatanSlayer, 4, 13"} />
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
                        {this.getMatchHeader("OLE!", "TEA", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Canyon
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    100%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    49%
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
                                                        <PlayerRowComponent stats={"1,Dough Dough, 60, 39"} />
                                                        <PlayerRowComponent stats={"2,StJokira, 46, 41"} />
                                                        <PlayerRowComponent stats={"3,amospalla, 40, 31"} />
                                                        <PlayerRowComponent stats={"4,Flynn, 34, 17"} />
                                                        <PlayerRowComponent stats={"5,Neodvd, 19, 41"} />
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
                                                        <PlayerRowComponent stats={"1,RaspiBox BB, 59, 51"} />
                                                        <PlayerRowComponent stats={"2,SmegHead BB, 46, 58"} />
                                                        <PlayerRowComponent stats={"3,Gold Memba, 39, 49"} />
                                                        <PlayerRowComponent stats={"4,SatanSlayer, 21, 44"} />
                                                        <PlayerRowComponent stats={"5,thehodown, 23, 38"} />

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
                                                        <PlayerRowComponent stats={"1,Neodvd, 17, 7"} />
                                                        <PlayerRowComponent stats={"2,amospalla, 15, 10"} />
                                                        <PlayerRowComponent stats={"3,Dough Dough, 21, 13"} />
                                                        <PlayerRowComponent stats={"4,Flynn, 20, 13"} />
                                                        <PlayerRowComponent stats={"5,StJokira, 13, 12"} />
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
                                                        <PlayerRowComponent stats={"1,Gold Memba, 9, 8"} />
                                                        <PlayerRowComponent stats={"2,RaspiBox BB, 15, 22"} />
                                                        <PlayerRowComponent stats={"3,SmegHead BB, 13, 10"} />
                                                        <PlayerRowComponent stats={"4,Rob, 8, 20"} />
                                                        <PlayerRowComponent stats={"5,thehodown, 9, 16"} />
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
                        {this.getMatchHeader("TULP", "PG", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Canyon
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    100%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    46%
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
                                                        <PlayerRowComponent stats={"1,Skimoes, 65, 37"} />
                                                        <PlayerRowComponent stats={"2,Monkey, 41, 43"} />
                                                        <PlayerRowComponent stats={"3,GeleArthur, 52, 46"} />
                                                        <PlayerRowComponent stats={"4,Himitsu, 62, 51"} />
                                                        <PlayerRowComponent stats={"5,Heis, 29, 47"} />
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
                                                        <PlayerRowComponent stats={"1,Leeboys, 75, 57"} />
                                                        <PlayerRowComponent stats={"2,HEAD, 62, 48"} />
                                                        <PlayerRowComponent stats={"3,Emzion bb, 34, 53"} />
                                                        <PlayerRowComponent stats={"4,Stream, 30, 36"} />
                                                        <PlayerRowComponent stats={"5,Birky, 21, 58"} />
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
                                                        <PlayerRowComponent stats={"1,GeleArthur, 20, 21"} />
                                                        <PlayerRowComponent stats={"2,Skimoes, 23, 10"} />
                                                        <PlayerRowComponent stats={"3,ThunderDog, 20, 21"} />
                                                        <PlayerRowComponent stats={"4,Monkey, 21, 21"} />
                                                        <PlayerRowComponent stats={"5,Heis, 19, 14"} />
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
                                                        <PlayerRowComponent stats={"1,Leeboys, 25, 22"} />
                                                        <PlayerRowComponent stats={"2,HEAD, 24, 19"} />
                                                        <PlayerRowComponent stats={"3,Stream, 12, 24"} />
                                                        <PlayerRowComponent stats={"4,Emzion bb, 18, 18"} />
                                                        <PlayerRowComponent stats={"5,Birky, 6, 23"} />
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
                        {this.getMatchHeader("OLE!", "PG", 2, 1)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <Row>
                                    <Col className="mapsStyle">
                                        Payload Canyon
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    92%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    100%
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
                                                        <PlayerRowComponent stats={"1,elgambitero, 66, 72"} />
                                                        <PlayerRowComponent stats={"2,Dough Dough, 65, 64"} />
                                                        <PlayerRowComponent stats={"3,amospalla, 59, 57"} />
                                                        <PlayerRowComponent stats={"4,StJokira, 55, 68"} />
                                                        <PlayerRowComponent stats={"5,Neodvd, 36, 64"} />
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
                                                        <PlayerRowComponent stats={"1,HEADNOB, 90, 54"} />
                                                        <PlayerRowComponent stats={"2,jueviolegrace, 91, 53"} />
                                                        <PlayerRowComponent stats={"3,Emzion bb, 58, 69"} />
                                                        <PlayerRowComponent stats={"4,Russta, 43, 54"} />
                                                        <PlayerRowComponent stats={"5,Birky1, 37, 57"} />
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
                                                        <PlayerRowComponent stats={"1,StJokira, 22, 11"} />
                                                        <PlayerRowComponent stats={"2,Neodvd, 8, 13"} />
                                                        <PlayerRowComponent stats={"3,amospalla, 12, 13"} />
                                                        <PlayerRowComponent stats={"4,elgambitero, 14, 11"} />
                                                        <PlayerRowComponent stats={"5,Dough Dough, 14, 12"} />

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
                                                        <PlayerRowComponent stats={"1,HEADNOB, 20, 11"} />
                                                        <PlayerRowComponent stats={"2,jueviolegrace, 17, 19"} />
                                                        <PlayerRowComponent stats={"3,Russta, 6, 10"} />
                                                        <PlayerRowComponent stats={"4,Birky1, 9, 17"} />
                                                        <PlayerRowComponent stats={"5,Emzion bb, 8, 13"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Control Point Stadium
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    300
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    273
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
                                                        <PlayerRowComponent stats={"1,Dough Dough, 34, 32"} />
                                                        <PlayerRowComponent stats={"2,elgambitero, 25, 32"} />
                                                        <PlayerRowComponent stats={"3,amospalla, 54, 28"} />
                                                        <PlayerRowComponent stats={"4,StJokira, 30, 36"} />
                                                        <PlayerRowComponent stats={"5,Neodvd, 13, 34"} />

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
                                                        <PlayerRowComponent stats={"1,jueviolegrace, 43, 31"} />
                                                        <PlayerRowComponent stats={"2,HEADNOB, 49, 28"} />
                                                        <PlayerRowComponent stats={"3,Emzion bb, 35, 34"} />
                                                        <PlayerRowComponent stats={"4,Birky1, 21, 32"} />
                                                        <PlayerRowComponent stats={"5,Scutch74, 14, 31"} />
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
                        {this.getMatchHeader("PZZA", "PG", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

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
                                                        <PlayerRowComponent stats={"1,Time, 35, 25"} />
                                                        <PlayerRowComponent stats={"2,ROXXYLUCY, 25, 19"} />
                                                        <PlayerRowComponent stats={"3,Rock, 31, 22"} />
                                                        <PlayerRowComponent stats={"4,TLALOC, 22, 27"} />
                                                        <PlayerRowComponent stats={"5,Marini, 29, 17"} />

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

                                                        <PlayerRowComponent stats={"1,jueviolegrace, 40, 32"} />
                                                        <PlayerRowComponent stats={"2,Scutch74, 15, 41"} />
                                                        <PlayerRowComponent stats={"3,Emzion bb, 29, 21"} />
                                                        <PlayerRowComponent stats={"4,Russta, 14, 26"} />
                                                        <PlayerRowComponent stats={"5,Birky1, 8, 24"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

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
                                                        <PlayerRowComponent stats={"1,Time, 70, 58"} />
                                                        <PlayerRowComponent stats={"2,Rock, 54, 59"} />
                                                        <PlayerRowComponent stats={"3,Taxi, 64, 47"} />
                                                        <PlayerRowComponent stats={"4,Emulk, 46, 48"} />
                                                        <PlayerRowComponent stats={"5,Marini, 32, 55"} />

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
                                                        <PlayerRowComponent stats={"1,jueviolegrace, 100, 54"} />
                                                        <PlayerRowComponent stats={"2,Emzion bb, 75, 48"} />
                                                        <PlayerRowComponent stats={"3,Russta, 41, 54"} />
                                                        <PlayerRowComponent stats={"4,Birky1, 29, 58"} />
                                                        <PlayerRowComponent stats={"5,Scutch74, 20, 55"} />
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
                        {this.getMatchHeader("TULP", "OLE!", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />

                                        Payload Canyon
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    50%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    49%
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
                                                        <PlayerRowComponent stats={"1,Skimoes nv, 55, 27"} />
                                                        <PlayerRowComponent stats={"2,Heis, 32, 35"} />
                                                        <PlayerRowComponent stats={"3,Himitsu, 35, 33"} />
                                                        <PlayerRowComponent stats={"4,Monkey, 26, 36"} />
                                                        <PlayerRowComponent stats={"5,Mr V, 26, 16"} />

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
                                                        <PlayerRowComponent stats={"1,Dough Dough, 42, 30"} />
                                                        <PlayerRowComponent stats={"2,Flynn, 39, 36"} />
                                                        <PlayerRowComponent stats={"3,elgambitero, 29, 37"} />
                                                        <PlayerRowComponent stats={"4,KingQuiko, 20, 35"} />
                                                        <PlayerRowComponent stats={"5,Neodvd, 13, 37"} />
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
                                                        <PlayerRowComponent stats={"1,Skimoes nv, 57, 19"} />
                                                        <PlayerRowComponent stats={"4,Monkey, 34, 40"} />
                                                        <PlayerRowComponent stats={"5,Mr V, 38, 20"} />
                                                        <PlayerRowComponent stats={"2,Shapes, 17, 34"} />
                                                        <PlayerRowComponent stats={"3,Marcel, 23, 39"} />
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
                                                        <PlayerRowComponent stats={"2,Flynn, 37, 35"} />
                                                        <PlayerRowComponent stats={"4,KingQuiko, 24, 37"} />
                                                        <PlayerRowComponent stats={"5,StJokira, 30, 39"} />
                                                        <PlayerRowComponent stats={"3,elgambitero, 22, 33"} />
                                                        <PlayerRowComponent stats={"1,Dough Dough, 34, 30"} />
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
                        {this.getMatchHeader("NORD", "TULP", 2, 0)}
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
                                                        <PlayerRowComponent stats={"1,Zed, 29, 20"} />
                                                        <PlayerRowComponent stats={"2,nogl, 36, 14"} />
                                                        <PlayerRowComponent stats={"3,Proeis, 21, 24"} />
                                                        <PlayerRowComponent stats={"4,T-Fairy, 23, 17"} />
                                                        <PlayerRowComponent stats={"5,Napalm, 20, 20"} />

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
                                                        <PlayerRowComponent stats={"1,GeleArthur, 20, 28"} />
                                                        <PlayerRowComponent stats={"2,Skimoes, 23, 18"} />
                                                        <PlayerRowComponent stats={"3,Monkey, 14, 31"} />
                                                        <PlayerRowComponent stats={"4,Himitsu, 23, 27"} />
                                                        <PlayerRowComponent stats={"5,Cornpug, 14, 31"} />
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
                                                        <PlayerRowComponent stats={"1,nogl, 30, 14"} />
                                                        <PlayerRowComponent stats={"2,Zed, 18, 15"} />
                                                        <PlayerRowComponent stats={"3,Napalm, 13, 12"} />
                                                        <PlayerRowComponent stats={"4,T-Fairy, 18, 13"} />
                                                        <PlayerRowComponent stats={"5,tim9009, 6, 13"} />
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
                                                        <PlayerRowComponent stats={"1,GeleArthur, 16, 19"} />
                                                        <PlayerRowComponent stats={"2,Himitsu, 11, 22"} />
                                                        <PlayerRowComponent stats={"3,Skimoes, 18, 10"} />
                                                        <PlayerRowComponent stats={"4,Monkey, 13, 22"} />
                                                        <PlayerRowComponent stats={"5,Cornpug, 9, 13"} />

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
                        {this.getMatchHeader("OLE!", "PZZA", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
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

                                                        <PlayerRowComponent stats={"1,amospalla, 45, 46"} />
                                                        <PlayerRowComponent stats={"2,elgambitero, 43, 31"} />
                                                        <PlayerRowComponent stats={"4,StJokira, 38, 34"} />
                                                        <PlayerRowComponent stats={"3,Blas-jugon, 18, 25"} />
                                                        <PlayerRowComponent stats={"5,lucaspedrajas, 17, 36"} />

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
                                                        <PlayerRowComponent stats={"1,Taxi, 41, 44"} />
                                                        <PlayerRowComponent stats={"2,Roxxylucy, 28, 37"} />
                                                        <PlayerRowComponent stats={"3,Time, 46, 42"} />
                                                        <PlayerRowComponent stats={"4,Marini, 35, 22"} />
                                                        <PlayerRowComponent stats={"5,TLALOC, 18, 18"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Launchpad
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    96%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    93%
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
                                                        <PlayerRowComponent stats={"1,amospalla, 86, 45"} />
                                                        <PlayerRowComponent stats={"2,elgambitero, 78, 50"} />
                                                        <PlayerRowComponent stats={"3,Blas-jugon, 37, 60"} />
                                                        <PlayerRowComponent stats={"4,StJokira, 53, 61"} />
                                                        <PlayerRowComponent stats={"5,lucaspedrajas, 34, 66"} />
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
                                                        <PlayerRowComponent stats={"1,Time, 66, 65"} />
                                                        <PlayerRowComponent stats={"2,Taxi, 70, 59"} />
                                                        <PlayerRowComponent stats={"3,Emulk, 58, 60"} />
                                                        <PlayerRowComponent stats={"4,Semma, 39, 61"} />
                                                        <PlayerRowComponent stats={"5,IaiaT, 45, 53"} />

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
                        {this.getMatchHeader("NORD", "PG", 2, 0)}
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
                                                        <PlayerRowComponent stats={"1,nogl, 57, 29"} />
                                                        <PlayerRowComponent stats={"2,T-Fairy, 57, 27"} />
                                                        <PlayerRowComponent stats={"3,Shiny, 55, 34"} />
                                                        <PlayerRowComponent stats={"4,Zed, 49, 27"} />
                                                        <PlayerRowComponent stats={"5,Proeis, 32, 35"} />

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
                                                        <PlayerRowComponent stats={"1,jueviolegrace, 56, 52"} />
                                                        <PlayerRowComponent stats={"2,nobhead, 37, 48"} />
                                                        <PlayerRowComponent stats={"3,Emzion, 21, 47"} />
                                                        <PlayerRowComponent stats={"4,russta, 17, 52"} />
                                                        <PlayerRowComponent stats={"5,Scutch74, 18, 53"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Control Point Stadium
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    300
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    79
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
                                                        <PlayerRowComponent stats={"1,nogl, 43, 11"} />
                                                        <PlayerRowComponent stats={"2,SNooK, 7, 13"} />
                                                        <PlayerRowComponent stats={"3,Zed, 23, 17"} />
                                                        <PlayerRowComponent stats={"4,T-Fairy, 30, 11"} />
                                                        <PlayerRowComponent stats={"5,Napalm, 13, 20"} />
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

                                                        <PlayerRowComponent stats={"1,nobhead, 43, 11"} />
                                                        <PlayerRowComponent stats={"2,jueviolegrace, 17, 22"} />
                                                        <PlayerRowComponent stats={"3,Emzion, 16, 20"} />
                                                        <PlayerRowComponent stats={"4,Scutch74, 6, 26"} />
                                                        <PlayerRowComponent stats={"5,russta, 14, 23"} />
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
                        {this.getMatchHeader("NORD", "VIN", 2, 0)}
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
                                                        <PlayerRowComponent stats={"1,T-Fairy, 53, 23"} />
                                                        <PlayerRowComponent stats={"2,Zed, 44, 28"} />
                                                        <PlayerRowComponent stats={"3,SNooK, 32, 24"} />
                                                        <PlayerRowComponent stats={"4,Napalm, 30, 32"} />
                                                        <PlayerRowComponent stats={"5,nogl, 23, 10"} />
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
                                                        <PlayerRowComponent stats={"1,Lilfeeze, 39, 37"} />
                                                        <PlayerRowComponent stats={"2,Bruh, 26,39"} />
                                                        <PlayerRowComponent stats={"3,alexis2m, 18, 42"} />
                                                        <PlayerRowComponent stats={"4,RAFIKI, 13, 31"} />
                                                        <PlayerRowComponent stats={"5,Pythyu, 16, 36"} />
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
                                                        <PlayerRowComponent stats={"1,T-Fairy, 17, 6"} />
                                                        <PlayerRowComponent stats={"2,nogl, 20, 6"} />
                                                        <PlayerRowComponent stats={"3,Zed, 10, 3"} />
                                                        <PlayerRowComponent stats={"4,tim9009, 4, 4"} />
                                                        <PlayerRowComponent stats={"5,Napalm, 11, 5"} />
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
                                                        <PlayerRowComponent stats={"3,Bruh, 9,10"} />
                                                        <PlayerRowComponent stats={"5,Pythyu, 3, 12"} />
                                                        <PlayerRowComponent stats={"2,RAFIKI, 6, 12"} />
                                                        <PlayerRowComponent stats={"4,alexis2m, 2, 13"} />
                                                        <PlayerRowComponent stats={"1,Lilfeeze, 4, 15"} />
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
                        {this.getMatchHeader("PZZA", "TEA", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
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
                                                        <PlayerRowComponent stats={"1,Time, 67, 47"} />
                                                        <PlayerRowComponent stats={"2,IT Roxxylucy, 24, 46"} />
                                                        <PlayerRowComponent stats={"3,IaiaT, 44, 46"} />
                                                        <PlayerRowComponent stats={"4,Rock, 57, 33"} />
                                                        <PlayerRowComponent stats={"5,Marini, 48, 23"} />
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
                                                        <PlayerRowComponent stats={"1,RaspiBox DARK, 61, 52"} />
                                                        <PlayerRowComponent stats={"2,thehodown, 36,50"} />
                                                        <PlayerRowComponent stats={"3,SmegHead, 52, 49"} />
                                                        <PlayerRowComponent stats={"4,uk.koala, 34, 50"} />
                                                        <PlayerRowComponent stats={"5,SatanSlayer UK, 7, 54"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
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
                                                        <PlayerRowComponent stats={"1,Time, 88, 51"} />
                                                        <PlayerRowComponent stats={"2,Rock, 53, 55"} />
                                                        <PlayerRowComponent stats={"3,IT Emulk, 58, 50"} />
                                                        <PlayerRowComponent stats={"4,Marini, 42, 55"} />
                                                        <PlayerRowComponent stats={"5,IaiaT, 35, 47"} />
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
                                                        <PlayerRowComponent stats={"1,RaspiBox DARK, 80, 56"} />
                                                        <PlayerRowComponent stats={"2,SmegHead, 59, 60"} />

                                                        <PlayerRowComponent stats={"3,thehodown, 61,48"} />
                                                        <PlayerRowComponent stats={"4,uk.koala, 42, 63"} />
                                                        <PlayerRowComponent stats={"5,SatanSlayer UK, 9, 41"} />
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
                        {this.getMatchHeader("TULP", "VIN", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
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
                                                        <PlayerRowComponent stats={"1,GeleArthur, 71, 66"} />
                                                        <PlayerRowComponent stats={"2,Monkey, 50, 74"} />
                                                        <PlayerRowComponent stats={"3,Heis, 64, 50"} />
                                                        <PlayerRowComponent stats={"4,Skimoes, 70, 46"} />
                                                        <PlayerRowComponent stats={"5,ThunderDog, 40, 62"} />
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
                                                        <PlayerRowComponent stats={"1,Lilfeeze, 85, 38"} />
                                                        <PlayerRowComponent stats={"2,Bruh, 57,77"} />
                                                        <PlayerRowComponent stats={"3,alexis2m, 44, 47"} />
                                                        <PlayerRowComponent stats={"4,Dje-unit, 77, 67"} />
                                                        <PlayerRowComponent stats={"5,Pythyu, 28, 75"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
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
                                                        <PlayerRowComponent stats={"1,Skimoes, 92, 38"} />
                                                        <PlayerRowComponent stats={"2,Monkey, 57, 43"} />
                                                        <PlayerRowComponent stats={"3,GeleArthur, 64, 52"} />
                                                        <PlayerRowComponent stats={"4,Heis, 43, 54"} />
                                                        <PlayerRowComponent stats={"5,Himitsu, 47, 58"} />
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
                                                        <PlayerRowComponent stats={"1,Lilfeeze, 72, 62"} />
                                                        <PlayerRowComponent stats={"2,Dje-unit, 52, 61"} />
                                                        <PlayerRowComponent stats={"3,Bruh, 52,68"} />
                                                        <PlayerRowComponent stats={"4,alexis2m, 34, 63"} />
                                                        <PlayerRowComponent stats={"5,Pythyu, 29, 52"} />
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

                        {this.getMatchHeader("NORD", "OLE!", 2, 0)}
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
                                                        <PlayerRowComponent stats={"1,T-Fairy, 82, 35"} />
                                                        <PlayerRowComponent stats={"2,nogl, 79, 35"} />
                                                        <PlayerRowComponent stats={"3,Zed, 48, 29"} />
                                                        <PlayerRowComponent stats={"4,Proeis, 42, 38"} />
                                                        <PlayerRowComponent stats={"5,SNooK, 32, 27"} />
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
                                                        <PlayerRowComponent stats={"1,elgambitero, 28, 56"} />
                                                        <PlayerRowComponent stats={"2,Dough Dough, 39, 53"} />
                                                        <PlayerRowComponent stats={"3,StJokira, 35,59"} />
                                                        <PlayerRowComponent stats={"4,KingQuiko, 42, 59"} />
                                                        <PlayerRowComponent stats={"5,Evaristo, 14, 57"} />
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
                                                        <PlayerRowComponent stats={"1,Zed, 26, 9"} />
                                                        <PlayerRowComponent stats={"2,nogl, 29, 15"} />
                                                        <PlayerRowComponent stats={"3,T-Fairy, 16, 16"} />
                                                        <PlayerRowComponent stats={"4,tim9009, 14, 11"} />
                                                        <PlayerRowComponent stats={"5,Napalm, 16, 20"} />

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
                                                        <PlayerRowComponent stats={"1,elgambitero, 22, 25"} />
                                                        <PlayerRowComponent stats={"2,Dough Dough, 14, 21"} />
                                                        <PlayerRowComponent stats={"3,StJokira, 13,21"} />
                                                        <PlayerRowComponent stats={"4,KingQuiko, 15, 19"} />
                                                        <PlayerRowComponent stats={"5,Evaristo, 6, 16"} />

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
                        {this.getMatchHeader("PZZA", "NORD", 0, 2)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
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
                                                        <PlayerRowComponent stats={"1,f3g4to, 6, 7"} />
                                                        <PlayerRowComponent stats={"2,Marini, 2, 5"} />
                                                        <PlayerRowComponent stats={"3,Time, 4, 9"} />
                                                        <PlayerRowComponent stats={"4,Rock, 1, 7"} />
                                                        <PlayerRowComponent stats={"5,IaiaT, 1, 7"} />
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
                                                        <PlayerRowComponent stats={"1,nogl, 15, 4"} />
                                                        <PlayerRowComponent stats={"2,Zed, 7,2"} />
                                                        <PlayerRowComponent stats={"3,T-Fairy, 8, 3"} />
                                                        <PlayerRowComponent stats={"4,tim9009, 4, 4"} />
                                                        <PlayerRowComponent stats={"5,Proeis, 0, 0"} />
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className="mapsStyle">
                                        Capture The Flag Coast
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
                                                        <PlayerRowComponent stats={"1,Time, 62, 60"} />
                                                        <PlayerRowComponent stats={"2,Emulk, 43, 80"} />
                                                        <PlayerRowComponent stats={"3,Taxi SL, 36, 73"} />
                                                        <PlayerRowComponent stats={"4,IT Roxxylucy, 27, 62"} />
                                                        <PlayerRowComponent stats={"5,TLALOC, 21, 92"} />

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
                                                        <PlayerRowComponent stats={"1,nogl, 99, 37"} />
                                                        <PlayerRowComponent stats={"2,Zed, 48,40"} />
                                                        <PlayerRowComponent stats={"3,T-Fairy, 82, 33"} />
                                                        <PlayerRowComponent stats={"4,SNooK, 51, 35"} />
                                                        <PlayerRowComponent stats={"5,Proeis, 85, 51"} />
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
                        {this.getMatchHeader("VIN", "PG", 2, 0)}
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
                                                        <PlayerRowComponent stats={"1,Dje-unit, 58, 46"} />
                                                        <PlayerRowComponent stats={"2,Lilfeeze, 75, 42"} />
                                                        <PlayerRowComponent stats={"3,Bruh, 50, 46"} />
                                                        <PlayerRowComponent stats={"5,Pythyu, 32, 41"} />
                                                        <PlayerRowComponent stats={"4,RAFIKI, 49, 36"} />

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
                                                        <PlayerRowComponent stats={"1,jueviolegrace, 67, 50"} />
                                                        <PlayerRowComponent stats={"2,NOB HEAD, 60, 53"} />
                                                        <PlayerRowComponent stats={"3,Emzion, 32, 53"} />
                                                        <PlayerRowComponent stats={"4,russta, 32, 54"} />
                                                        <PlayerRowComponent stats={"5,Birky1, 17, 59"} />

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
                                                        <PlayerRowComponent stats={"1,Lilfeeze, 45, 4"} />
                                                        <PlayerRowComponent stats={"2,Dje-unit, 22, 16"} />
                                                        <PlayerRowComponent stats={"3,Bruh, 21, 16"} />
                                                        <PlayerRowComponent stats={"4,RAFIKI, 14, 17"} />
                                                        <PlayerRowComponent stats={"5,Pythyu, 17, 20"} />

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
                                                        <PlayerRowComponent stats={"1,NOB HEAD, 25, 23"} />
                                                        <PlayerRowComponent stats={"2,jueviolegrace, 17, 25"} />
                                                        <PlayerRowComponent stats={"3,Emzion, 8, 21"} />
                                                        <PlayerRowComponent stats={"4,russta, 11, 19"} />
                                                        <PlayerRowComponent stats={"5,Birky1, 1, 32"} />
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
                        {this.getMatchHeader("NORD", "TEA", 2, 0)}
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
                                                        <PlayerRowComponent stats={"1,nogl, 79, 31, 8788"} />
                                                        <PlayerRowComponent stats={"2,Zed, 64, 31, 7610"} />
                                                        <PlayerRowComponent stats={"3,t_Fairy, 63, 37, 6369"} />
                                                        <PlayerRowComponent stats={"4,SNooK, 43, 27, 5917"} />
                                                        <PlayerRowComponent stats={"5,Napalm, 40, 39, 5404"} />
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
                                                        <PlayerRowComponent stats={"1,Shrike, 51, 59, 5990"} />
                                                        <PlayerRowComponent stats={"2,RaspiBox BB, 44, 53, 5106"} />
                                                        <PlayerRowComponent stats={"3,SmegHead, 28, 58, 4746"} />
                                                        <PlayerRowComponent stats={"4,uk.koala, 27, 65, 3868"} />
                                                        <PlayerRowComponent stats={"5,SatanSlayer UK, 9, 56, 2098"} />
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

                                                        <PlayerRowComponent stats={"1,nogl, 11, 5, 2384"} />
                                                        <PlayerRowComponent stats={"2,t_Fairy, 7, 3, 1818"} />
                                                        <PlayerRowComponent stats={"3,tim9009, 3, 5, 1392"} />
                                                        <PlayerRowComponent stats={"4,Shiny, 8, 1, 1298"} />
                                                        <PlayerRowComponent stats={"5,Napalm, 10, 3, 1212"} />
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
                                                        <PlayerRowComponent stats={"1,SmegHead, 3, 9, 1380"} />
                                                        <PlayerRowComponent stats={"2,RaspiBox BB, 5, 7, 1132"} />
                                                        <PlayerRowComponent stats={"3,SatanSlayer UK, 1, 7, 1100"} />
                                                        <PlayerRowComponent stats={"1,Shrike, 4, 7, 940"} />
                                                        <PlayerRowComponent stats={"4,uk.koala, 4, 9, 664"} />

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

export default Group2Component;