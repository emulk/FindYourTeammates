import React, { Component } from 'react';
import { withRouter, Route, HashRouter } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import ServersComponent from './ServersComponent';
import MapsComponent from '../Maps/MapsComponent';
import PlayersComponent from '../Players/PlayersComponent';
import PewPewCupComponent from '../Match/PewPewCupComponent';
import SeasonOneComponent from '../Match/SeasonOne/SeasonOneComponent';
import CalendarComponent from '../Match/SeasonTwo/CalendarComponent';
import PlayerStatsComponent from '../Match/SeasonTwo/PlayerStatsComponent';

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ServerData: []
        };
        this.getUpdatedTimeData = this.getUpdatedTimeData.bind(this);
    }

    componentDidMount() {
        this.getUpdatedTimeData();
        setInterval(this.getUpdatedTimeData, 1000);
    }

    getUpdatedTimeData() {
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
                ServerData: JSON.parse(data)
            })
        }
    }

    render() {
        return (
            <HashRouter>
                <Route exact path="/">
                    <Row>
                        <Col >
                            <ServersComponent AllData={this.state.ServerData} Title='Servers' />
                        </Col>
                    </Row>

                </Route>
                <Route path="/Maps" exact>
                    <MapsComponent />
                </Route>
                <Route path="/Players" exact>
                    <PlayersComponent />
                </Route>
                <Route path="/pewpewcalendar" exact>
                    <CalendarComponent />
                </Route>

                <Route path="/pewpewcup" exact>
                    <PewPewCupComponent />
                </Route>
                <Route path="/playerstats" exact>
                    <PlayerStatsComponent />
                </Route>
                <Route path="/SeasonOne" exact>
                    <SeasonOneComponent />
                </Route>
            </HashRouter>
        );
    }
}

export default withRouter(TableComponent);