import React, { Component } from 'react';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import PlayerRowComponent from '../PlayerRowComponent';
import PlayerS2RowComponent from './PlayerS2RowComponent';
import './S2Group1ComponentStyle.css';


class Match {
    constructor(team1, team2, score1, score2, map1, map2, map3) {
        this.Team1 = team1;
        this.Team2 = team2;
        this.Score1 = score1;
        this.Score2 = score2;
        this.Map1 = map1;
        this.Map2 = map2;
        this.Map3 = map3;
    }
}


class Map {
    constructor(name, score1, score2, players1, players2) {
        this.Name = name;
        this.Score1 = score1;
        this.Score2 = score2;
        this.Players1 = players1;
        this.Players2 = players2;
    }
}

class Player {
    constructor(name, kill, deaths, score) {
        this.Name = name;
        this.Kill = kill;
        this.Deaths = deaths;
        this.Score = score;
    }
}


class S2Group1Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ServerRankingData: [],
            Teams: [],
            Matches: []
        };

        this.getMatchHeader = this.getMatchHeader.bind(this);
        this.handleTeams = this.handleTeams.bind(this);
        this.getMatchesData = this.getMatchesData.bind(this);
    }

    componentDidMount() {
        this.getTeamsData();
        this.getMatchesData();
    }

    getTeamsData() {
        let url = "https://www.elegantweb.it/FindYourTeammates/Season2/GetGroup1.php";
        let updatedTime = undefined;

        fetch(url)
            .then(response => response.text())
            .then(
                updatedTime => this.handleTeams(updatedTime)
            );
    }

    getMatchesData() {
        let url = "https://www.elegantweb.it/FindYourTeammates/Season2/GetMatchesGroup1.php";
        let updatedTime = undefined;

        fetch(url)
            .then(response => response.text())
            .then(
                updatedTime => this.handleMatches(updatedTime)
            );
    }

    handleMatches(data) {
        if (data && data != ("null \n")) {
            debugger;
            var matches = [];
            var match = new Match();
            var map = new Map;
            var players1 = [];
            var players2 = [];
            var players3 = [];
            var players4 = [];
            var countMap = 0;
            JSON.parse(data).map((data, index) => {
                if (data[4] === 'match') {
                    match = new Match();
                    match.Team1 = data[0];
                    match.Team2 = data[1];
                    match.Score1 = data[2];
                    match.Score2 = data[3];
                }

                if (data[4] === 'map1') {
                    var map = new Map;
                    map.Name = data[0];
                    map.Score1 = data[2];
                    map.Score2 = data[3];
                    match.Map1 = map;
                    countMap++;
                }

                if (data[4] === 'map2') {
                    var map = new Map;
                    map.Name = data[0];
                    map.Score1 = data[2];
                    map.Score2 = data[3];
                    match.Map2 = map;

                    countMap++;
                }
                if (data[4] === 'map3') {
                    var map = new Map;
                    map.Name = data[0];
                    map.Score1 = data[2];
                    map.Score2 = data[3];
                    match.Map3 = map;
                    countMap++;
                }

                if (data[4] === 'player1') {
                    var player = new Player();
                    player.Name = data[0];
                    player.Kill = data[1];
                    player.Deaths = data[2];
                    player.Score = data[3];
                    players1.push(player);
                }

                if (data[4] === 'player2') {
                    var player = new Player();
                    player.Name = data[0];
                    player.Kill = data[1];
                    player.Deaths = data[2];
                    player.Score = data[3];
                    players2.push(player);
                }

                if (data[4] === 'player3') {
                    var player = new Player();
                    player.Name = data[0];
                    player.Kill = data[1];
                    player.Deaths = data[2];
                    player.Score = data[3];
                    players3.push(player);
                }

                if (data[4] === 'player4') {
                    var player = new Player();
                    player.Name = data[0];
                    player.Kill = data[1];
                    player.Deaths = data[2];
                    player.Score = data[3];
                    players4.push(player);
                }

                if (data[4] === 'END') {
                    match.Map1.Players1 = players1;
                    match.Map1.Players2 = players2;
                    match.Map2.Players1 = players3;
                    match.Map2.Players2 = players4;
                    players1 = [];
                    players2 = [];
                    players3 = [];
                    players4 = [];
                    matches.push(match);
                }
            });

            this.setState({
                Matches: matches
            })
        }
    }

    handleTeams(data) {
        if (data) {
            var teams = new Array();
            var isHeader = true;
            var count = 0;
            JSON.parse(data).map((data1, index) => {
                if (!isHeader) {
                    var team = new Object();
                    team.Name = data1[0].replace(/_/g, " ");
                    team.Points = data1[1];
                    team.Win = data1[2];
                    team.Losses = data1[3];
                    teams.push(team)
                }
                isHeader = false;
                count++;
            });

            this.setState({
                Teams: teams
            })
        }
    }



    getHeaderTable() {
        return (
            <tr>
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
                                        {this.state.Teams.map((team, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{team.Name}</td>
                                                <td>{team.Points}</td>
                                                <td>{team.Win}</td>
                                                <td>{team.Losses}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

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
                {this.state.Matches.map((team, i) => (
                    <Row>

                        <Col>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    {this.getMatchHeader(team.Team1, team.Team2, team.Score1, team.Score2)}
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Row>
                                                <Col className="mapsStyle">
                                                    {team.Map1.Name}
                                                    <Row>
                                                        <Col>
                                                            <span className="teamStyle">
                                                                {team.Map1.Score1}
                                                            </span>
                                                            <span className="vsStyle">
                                                                -
                                                            </span>
                                                            <span className="teamStyle">
                                                                {team.Map1.Score2}
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

                                                                    {team.Map1.Players1.map((player, i) => (
                                                                        <>
                                                                            <PlayerS2RowComponent Name={player.Name} Kill={player.Kill} Deaths={player.Deaths} />
                                                                        </>
                                                                    ))}
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
                                                                    {team.Map1.Players2.map((player, i) => (
                                                                        <>
                                                                            <PlayerS2RowComponent Name={player.Name} Kill={player.Kill} Deaths={player.Deaths} />
                                                                        </>
                                                                    ))}
                                                                </tbody>
                                                            </Table>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col className="mapsStyle">
                                                    {team.Map2.Name}
                                                    <Row>
                                                        <Col>
                                                            <span className="teamStyle">
                                                                {team.Map2.Score1}
                                                            </span>
                                                            <span className="vsStyle">
                                                                -
                                                            </span>
                                                            <span className="teamStyle">
                                                                {team.Map2.Score2}
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
                                                                    {team.Map2.Players1.map((player, i) => (
                                                                        <>
                                                                            <PlayerS2RowComponent Name={player.Name} Kill={player.Kill} Deaths={player.Deaths} />
                                                                        </>
                                                                    ))}
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
                                                                    {team.Map2.Players2.map((player, i) => (
                                                                        <>
                                                                            <PlayerS2RowComponent Name={player.Name} Kill={player.Kill} Deaths={player.Deaths} />
                                                                        </>
                                                                    ))}
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


                        </Col>


                    </Row>

                ))
                }

            </>
        );
    }
}

export default S2Group1Component;