import React, { Component } from 'react';
import { Table, Row, Col, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './PlayersComponentStyle.css';

class PlayersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlayers: false,
            allData: '',
            searchValue: '',
            notifyPlayers: [],
            isFirstNotification: true
        };

        this.fillTable = this.fillTable.bind(this);
        this.getUpdatedData = this.getUpdatedData.bind(this);
        this.handleData = this.handleData.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.ClearAllNotifications = this.ClearAllNotifications.bind(this);
        this.addNotificationTd = this.addNotificationTd.bind(this);

        this.showNotification = this.showNotification.bind(this);
    }

    componentDidMount() {
        this.getUpdatedData();
        setInterval(this.getUpdatedData, 1000);

        var storedPlayers = JSON.parse(localStorage.getItem('players'));
        if (storedPlayers) {
            this.setState({
                notifyPlayers: storedPlayers
            });
        }

    }

    getUpdatedData() {
        let url = "https://api.dashlist.info/fetch";
        let updatedTime = undefined;

        fetch(url)
            .then(response => response.text())
            .then(
                updatedTime => this.handleData(updatedTime)
            );
    }

    handleData(data) {
        if (data) {
            this.setState({
                allData: JSON.parse(data),
                showPlayers: true
            })
        }
    }

    fillTable() {
        if (this.state.allData) {
            var arrayServer = [];
            Object.keys(this.state.allData).forEach(key => arrayServer.push({ name: key, value: this.state.allData[key] }))

            var allPlayers = [];
            arrayServer.map((AllData, index) => {
                if (AllData.value.players && AllData.value.players.length > 0) {
                    for (var i = 0; i < AllData.value.players.length; i++) {
                        if (this.state.isFirstNotification) {
                            if (this.state.notifyPlayers.includes(AllData.value.players[i].name)) {
                                this.showNotification(AllData.value.players[i].tag, AllData.value.players[i].name);
                            }
                        }

                        if (this.state.searchValue.length > 0) {
                            if (AllData.value.players[i].tag.toLowerCase().startsWith(this.state.searchValue.toLowerCase())
                                || AllData.value.players[i].name.toLowerCase().startsWith(this.state.searchValue.toLowerCase())) {
                                allPlayers.push(AllData.value.players[i]);
                            }
                        } else {
                            allPlayers.push(AllData.value.players[i]);
                        }
                    }


                }
            });
            this.state.isFirstNotification = false;


            return allPlayers.map((AllData, index) => {
                return (
                    <tr key={index} >
                        <td className="tagLevel">{AllData.level}</td>
                        <td className="totalConfirmedNumbers">{AllData.tag}</td>
                        <td className="playerNameColumn">{AllData.name}</td>
                        <td className="notifyColumn" onClick={this.addNotificationTd}><FontAwesomeIcon onClick={this.addNotification} icon={faBell} /> </td>
                    </tr>
                )

            })
        }
    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    addNotification(event) {
        if (event.target.parentElement.parentElement.previousElementSibling) {
            var playerName = event.target.parentElement.parentElement.previousElementSibling.innerText;
            var players = this.state.notifyPlayers;
            if (!players.includes(playerName)) {
                players.push(playerName);
                localStorage.setItem('players', JSON.stringify(players));
                NotificationManager.info(playerName + " added to notifications", playerName, 60000);
            }
        }
    }

    addNotificationTd(event) {
        if (event.target.previousElementSibling) {
            var playerName = event.target.previousElementSibling.innerText;
            var players = this.state.notifyPlayers;
            if (!players.includes(playerName)) {
                players.push(playerName);
                localStorage.setItem('players', JSON.stringify(players));
                NotificationManager.info(playerName + " added to notifications", playerName, 60000);
            }
        }
    }

    ClearAllNotifications() {
        localStorage.clear();
        this.setState({
            notifyPlayers: []
        });
    }

    showNotification(playerTag, playerName) {
        NotificationManager.info(playerTag + " " + playerName + " is now online!", playerName, 60000);
    }

    render() {
        return (
            <Col className="tablePlayersCol">
                <Row >
                    <Col className="tablePlayersTitle">
                        Players
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
                                    <th >Level</th>
                                    <th >Tag</th>
                                    <th >Name</th>
                                    <th className="clearrAllNotifications" onClick={this.ClearAllNotifications}> Clear All Notification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.showPlayers && this.fillTable()}
                            </tbody>
                        </Table>
                    </span>
                </Row>

                <NotificationContainer />
            </Col>
        );
    }
}

export default PlayersComponent;