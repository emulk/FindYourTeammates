import React, { Component } from 'react';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import PlayerRowComponent from './PlayerRowComponent';
import './SemifinalsComponentStyle.css';

class SemifinalsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.fillPlayersTable = this.fillPlayersTable.bind(this);
        this.getHeaderTable = this.getHeaderTable.bind(this);
        this.getMatchHeader = this.getMatchHeader.bind(this);
    }

    componentDidMount() {
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


                <Row>
                    <div class="container">
                        <div class="tournament-bracket tournament-bracket--rounded">
                            <div class="tournament-bracket__round tournament-bracket__round--semifinals">
                                <h3 class="tournament-bracket__round-title">Semifinals</h3>
                                <ul class="tournament-bracket__list">
                                    <li class="tournament-bracket__item">
                                        <div class="tournament-bracket__match" tabindex="0">
                                            <table class="tournament-bracket__table">
                                                <caption class="tournament-bracket__caption">
                                                    <time datetime="1998-02-20">23/06/2021</time>
                                                </caption>
                                                <thead class="sr-only">
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Score</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="tournament-bracket__content">
                                                    <tr class="tournament-bracket__team">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Canada">FRMG</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">0</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Czech Republic">TULP</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-cz" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">2</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>

                                    <li class="tournament-bracket__item">
                                        <div class="tournament-bracket__match" tabindex="0">
                                            <table class="tournament-bracket__table">
                                                <caption class="tournament-bracket__caption">
                                                    <time datetime="1998-02-20">01/07/2021</time>
                                                </caption>
                                                <thead class="sr-only">
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Score</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="tournament-bracket__content">
                                                    <tr class="tournament-bracket__team">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Finland">MIX</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-fi" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">1</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Russia">NORD</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-ru" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">2</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tournament-bracket__round tournament-bracket__round--gold">
                                <h3 class="tournament-bracket__round-title">Third Place PlayOff</h3>
                                <ul class="tournament-bracket__list">
                                    <li class="tournament-bracket__item">
                                        <div class="tournament-bracket__match" tabindex="0">
                                            <table class="tournament-bracket__table">
                                                <caption class="tournament-bracket__caption">
                                                    <time datetime="1998-02-21">07/07/2021</time>
                                                </caption>
                                                <thead class="sr-only">
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Score</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="tournament-bracket__content">
                                                    <tr class="tournament-bracket__team ">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Finland">FRMG</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-fi" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">0</span>
                                                            <span class="tournament-bracket__medal tournament-bracket__medal--bronze fa fa-trophy" aria-label="Bronze medal"></span>
                                                        </td>
                                                    </tr>
                                                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Canada">MIX</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">2</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tournament-bracket__round tournament-bracket__round--gold">
                                <h3 class="tournament-bracket__round-title">Finals</h3>
                                <ul class="tournament-bracket__list">
                                    <li class="tournament-bracket__item">
                                        <div class="tournament-bracket__match" tabindex="0">
                                            <table class="tournament-bracket__table">
                                                <caption class="tournament-bracket__caption">
                                                    <time datetime="1998-02-22">10/07/2021</time>
                                                </caption>
                                                <thead class="sr-only">
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Score</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="tournament-bracket__content">
                                                    <tr class="tournament-bracket__team ">
                                                        <td class="tournament-bracket__country">
                                                            <span class="tournament-bracket__code" title="Czech Republic">TULP</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-cz" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">0</span>
                                                            <span class="tournament-bracket__medal tournament-bracket__medal--gold fa fa-trophy" aria-label="Gold medal"></span>
                                                        </td>
                                                    </tr>
                                                    <tr class="tournament-bracket__team tournament-bracket__team--winner">
                                                        <td class="tournament-bracket__country ">
                                                            <span class="tournament-bracket__code" title="Russia">NORD</span>
                                                            <span class="tournament-bracket__flag flag-icon flag-icon-ru" aria-label="Flag"></span>
                                                        </td>
                                                        <td class="tournament-bracket__score">
                                                            <span class="tournament-bracket__number">2</span>
                                                            <span class="tournament-bracket__medal tournament-bracket__medal--silver fa fa-trophy" aria-label="Silver medal"></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Row>

                {/**
                 * Ranking Teams Group 1
                 * 
                 */}
                <Row >
                    <Col className="MatchTitle" >
                        Finals
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
                                            <td>NORD</td>
                                            <td>5</td>
                                            <td>4</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>TULP</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>MIX</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>FRMG</td>
                                            <td>0</td>
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
                 * Matches Semifinal
                 * 
                 */}

                <Row >
                    <Col className="MatchTitle" >
                        Match
                    </Col>
                </Row>
                <Accordion defaultActiveKey="0">
                    <Card>
                        {this.getMatchHeader("NORD", "TULP", 2, 0)}
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                    <Col className="mapsStyle">
                                        <FontAwesomeIcon icon={faTrophy} className="winingTrophy" />
                                        Payload Canoyon
                                        <Row>
                                            <Col>
                                                <span className="teamStyle">
                                                    100%
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    42%
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
                                                        <PlayerRowComponent stats={"1,nogl, 67, 40"} />
                                                        <PlayerRowComponent stats={"2,Shiny, 59, 42"} />
                                                        <PlayerRowComponent stats={"3,Zed, 41, 50"} />
                                                        <PlayerRowComponent stats={"4,T-Fairy 9v, 38, 47"} />
                                                        <PlayerRowComponent stats={"5,Proeis, 28, 52"} />
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
                                                        <PlayerRowComponent stats={"1,Skimoes hh, 55, 41"} />
                                                        <PlayerRowComponent stats={"2,Himitsu, 56, 51"} />
                                                        <PlayerRowComponent stats={"3,GeleArthur, 48, 58"} />
                                                        <PlayerRowComponent stats={"4,Mr V, 40, 33"} />
                                                        <PlayerRowComponent stats={"5,ThunderDog, 30, 58"} />
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
                                                        <PlayerRowComponent stats={"1,nogl, 44, 22"} />
                                                        <PlayerRowComponent stats={"2,Shiny, 31, 26"} />
                                                        <PlayerRowComponent stats={"3,Zed, 29, 25"} />
                                                        <PlayerRowComponent stats={"4,T-Fairy 9v, 31, 25"} />
                                                        <PlayerRowComponent stats={"5,Proeis, 18, 20"} />

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
                                                        <PlayerRowComponent stats={"1,Skimoes hh, 25, 26"} />
                                                        <PlayerRowComponent stats={"2,GeleArthur, 26, 35"} />
                                                        <PlayerRowComponent stats={"3,Himitsu, 38, 26"} />
                                                        <PlayerRowComponent stats={"4,Monkey, 10, 38"} />
                                                        <PlayerRowComponent stats={"5,Heis, 18, 32"} />

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
                        {this.getMatchHeader("FRMG", "MIX", 0, 2)}
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
                                                        {this.getHeaderTable()}
                                                    </thead>
                                                    <tbody>
                                                        <PlayerRowComponent stats={"1,Shen Rao, 58, 57"} />
                                                        <PlayerRowComponent stats={"2,Kasuo, 48, 70"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 54, 59"} />
                                                        <PlayerRowComponent stats={"4,Toga280 FR, 49, 35"} />
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
                                                        <PlayerRowComponent stats={"1,tsar lewin, 76, 54"} />
                                                        <PlayerRowComponent stats={"2,Mavrodi, 47, 51"} />
                                                        <PlayerRowComponent stats={"3,Du.Boss, 57, 49"} />
                                                        <PlayerRowComponent stats={"4,Michael.SPEEN, 38, 57"} />
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
                                                        <PlayerRowComponent stats={"1,Kasuo, 37, 63"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 49, 50"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 59, 70"} />
                                                        <PlayerRowComponent stats={"4,Toga280 FR, 31, 53"} />
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
                                                        <PlayerRowComponent stats={"1,Mavrodi, 63, 46"} />
                                                        <PlayerRowComponent stats={"2,tsar lewin, 59, 35"} />
                                                        <PlayerRowComponent stats={"3,Michael.SPEEN, 42, 53"} />
                                                        <PlayerRowComponent stats={"4,Du.Boss, 68, 45"} />
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
                        {this.getMatchHeader("NORD", "MIX", 2, 1)}
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
                                                    84%
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
                                                        <PlayerRowComponent stats={"1,nogl, 100, 36"} />
                                                        <PlayerRowComponent stats={"2,Shiny, 68, 45"} />
                                                        <PlayerRowComponent stats={"3,Zed, 76, 44"} />
                                                        <PlayerRowComponent stats={"4,Proeis, 54, 54"} />
                                                        <PlayerRowComponent stats={"5,T-Fairy 9v, 65, 45"} />
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
                                                        <PlayerRowComponent stats={"1,tsar lewin, 58, 69"} />
                                                        <PlayerRowComponent stats={"2,Mavrodi, 50, 66"} />
                                                        <PlayerRowComponent stats={"3,Du.Boss, 37, 65"} />
                                                        <PlayerRowComponent stats={"4,Michael.SPEEN, 35, 81"} />
                                                        <PlayerRowComponent stats={"5,Tom0910, 38, 87"} />
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
                                                        <PlayerRowComponent stats={"1,Zed, 70, 72"} />
                                                        <PlayerRowComponent stats={"2,nogl, 82, 59"} />
                                                        <PlayerRowComponent stats={"3,T-Fairy 9v, 70, 61"} />
                                                        <PlayerRowComponent stats={"4,Shiny, 78, 63"} />
                                                        <PlayerRowComponent stats={"5,tim9009, 49, 72"} />
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
                                                        <PlayerRowComponent stats={"1,tsar lewin, 97, 51"} />
                                                        <PlayerRowComponent stats={"2,Du.Boss, 74, 62"} />
                                                        <PlayerRowComponent stats={"3,Mavrodi, 49, 79"} />
                                                        <PlayerRowComponent stats={"4,Tom0910, 67, 65"} />
                                                        <PlayerRowComponent stats={"5,Michael.SPEEN, 37, 93"} />
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
                                                    300/300
                                                </span>
                                                <span className="vsStyle">
                                                    -
                                                </span>
                                                <span className="teamStyle">
                                                    243/300
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
                                                        <PlayerRowComponent stats={"1,nogl, 54, 26"} />
                                                        <PlayerRowComponent stats={"2,T-Fairy 9v, 30, 33"} />
                                                        <PlayerRowComponent stats={"3,Zed, 40, 30"} />
                                                        <PlayerRowComponent stats={"4,Shiny, 41, 33"} />
                                                        <PlayerRowComponent stats={"5,Firestar, 12, 29"} />
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
                                                        <PlayerRowComponent stats={"1,tsar lewin, 65, 33"} />
                                                        <PlayerRowComponent stats={"2,Du.Boss, 33, 34"} />
                                                        <PlayerRowComponent stats={"3,Michael.SPEEN, 7, 39"} />
                                                        <PlayerRowComponent stats={"4,Mavrodi, 22, 34"} />
                                                        <PlayerRowComponent stats={"5,Tom0910, 24, 37"} />
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
                        {this.getMatchHeader("TULP", "FRMG", 2, 0)}
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
                                                    37%
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
                                                        <PlayerRowComponent stats={"1,Skimoes hh, 69, 37"} />
                                                        <PlayerRowComponent stats={"2,Heis, 47, 29"} />
                                                        <PlayerRowComponent stats={"3,GeleArthur, 46, 40"} />
                                                        <PlayerRowComponent stats={"4,Monkey, 38, 35"} />
                                                        <PlayerRowComponent stats={"5,Himitsu, 58, 34"} />
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
                                                        <PlayerRowComponent stats={"1,Toga280, 48, 45"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 32, 52"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 38, 51"} />
                                                        <PlayerRowComponent stats={"4,Kasuo, 24, 61"} />
                                                        <PlayerRowComponent stats={"5,Oliver, 30, 51"} />
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
                                                    2
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
                                                        <PlayerRowComponent stats={"1,Skimoes hh, 75, 33"} />
                                                        <PlayerRowComponent stats={"2,Heis, 52, 53"} />
                                                        <PlayerRowComponent stats={"3,GeleArthur, 71, 69"} />
                                                        <PlayerRowComponent stats={"4,Mr V, 60, 39"} />
                                                        <PlayerRowComponent stats={"5,Himitsu, 64, 69"} />
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
                                                        <PlayerRowComponent stats={"1,Toga280, 51, 59"} />
                                                        <PlayerRowComponent stats={"2,Shen Rao, 62, 55"} />
                                                        <PlayerRowComponent stats={"3,Shangin, 60, 83"} />
                                                        <PlayerRowComponent stats={"4,Kasuo, 64, 73"} />
                                                        <PlayerRowComponent stats={"5,Oliver, 37, 57"} />
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

export default SemifinalsComponent;