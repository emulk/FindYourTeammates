import React, { Component } from 'react';
import { Table, Row, Col, FormControl } from 'react-bootstrap';
import PlayerComponent from './PlayerComponent';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './ServersComponentStyle.css';

class ServersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            notifyPlayers: [],
            isFirstNotification: true
        };

        this.fillTable = this.fillTable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showNotification = this.showNotification.bind(this);
        this.showNotification = this.showNotification.bind(this);
    }

    componentDidMount() {
        var storedPlayers = JSON.parse(localStorage.getItem('players'));
        if (storedPlayers) {
            this.setState({
                notifyPlayers: storedPlayers
            });
        }
    }

    showNotification(playerTag, playerName) {
        NotificationManager.info(playerTag + " " + playerName + " is now online!", playerName, 60000);
    }

    fillTable() {
        if (this.props.AllData) {
            var isInside = false;
            var arrayServer = [];
            if (this.state.searchValue.length > 0) {

                Object.keys(this.props.AllData).forEach(key => {
                    if (this.props.AllData[key].players && this.props.AllData[key].players.length > 0) {
                        var foundedPlayer = false;

                        this.props.AllData[key].players.forEach(player => {
                            if (player.tag.toLowerCase().startsWith(this.state.searchValue.toLowerCase())
                                || player.name.toLowerCase().startsWith(this.state.searchValue.toLowerCase())) {
                                foundedPlayer = true;
                            }
                        });
                        if (foundedPlayer) {
                            arrayServer.push({ name: key, value: this.props.AllData[key] });
                        }
                    }
                });

            } else {
                Object.keys(this.props.AllData).forEach(key => {
                    isInside = true;
                    arrayServer.push({ name: key, value: this.props.AllData[key] });
                    if (this.state.isFirstNotification && this.props.AllData[key].players) {
                        this.props.AllData[key].players.forEach(player => {
                            if (this.state.notifyPlayers.includes(player.name)) {
                                this.showNotification(player.tag, player.name);
                            }
                        });
                    }
                });
            }

            if (isInside) {
                this.state.isFirstNotification = false;
            }

            return arrayServer.map((AllData, index) => {
                if (AllData.value.players && AllData.value.players.length > 0) {
                    var bluTeam = [];
                    var redTeam = [];

                    AllData.value.players.forEach(player => {
                        if (player.team === 1) {
                            bluTeam.push(player);
                        } else {
                            redTeam.push(player);
                        }
                    });
                    return (
                        <tr key={index} >
                            <td>{AllData.name}</td>
                            <td>{AllData.value.region}</td>
                            <td >{AllData.value.map}</td>
                            <td className="totalConfirmedNumbers">{AllData.value.mode}</td>
                            <td ><Row ><PlayerComponent players={bluTeam} team="blue" /><PlayerComponent players={redTeam} team="red" /></Row></td>
                        </tr>
                    )
                }
            })
        }
    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <Col className="tableEuropeanCol">
                <Row>
                    <Col className="tableEuropeanTitle">

                        {this.props.Title}
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <span className="searchPlayerLabel">
                                    Search:
                        </span>
                            </Col>
                            <Col>

                                <FormControl
                                    className="playersSearchForm"
                                    placeholder="Tag or Username"
                                    aria-label="Tag or Username"
                                    onChange={this.handleChange}
                                />
                            </Col>

                        </Row>
                    </Col>

                </Row>
                <Row>
                    <span className="europTable-wrap">
                        <Table responsive className="europeTableCountrys table-hover " >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Region</th>
                                    <th>Map</th>
                                    <th>Mode</th>
                                    <th className="playerColumn">Players</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.fillTable()}
                            </tbody>
                        </Table>
                    </span>
                </Row>
                <NotificationContainer />
            </Col>
        );
    }
}

export default ServersComponent;