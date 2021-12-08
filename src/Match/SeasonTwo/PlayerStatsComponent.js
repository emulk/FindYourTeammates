import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {  faSort } from '@fortawesome/free-solid-svg-icons';
import './PlayerStatsComponentStyle.css';

class PlayerStatsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handlePlayers = this.handlePlayers.bind(this);
        this.fetchPlayers = this.fetchPlayers.bind(this);
    }

    componentDidMount() {
        this.fetchPlayers();
    }

    fetchPlayers(){
        let url = "https://www.elegantweb.it/FindYourTeammates/Season2/PlayersRanking.php";
        let updatedTime = undefined;

        fetch(url)
            .then(response => response.text())
            .then(
                updatedTime => this.handlePlayers(updatedTime)
            );
    }

    handlePlayers(data){
        if (data) {
            var players = new Array();
            var isHeader = true;
            var count = 0;
            JSON.parse(data).map((data, index) => {
                if (!isHeader) {
                    var player = new Object();
                    player.Id = count;
                    player.Tag = data[0];
                    player.Name = data[1];
                    player.Kills = data[2];
                    player.Death = data[3];
                    player.KD = Math.trunc((data[2]/data[3])*100)/100;
                    players.push(player)
                }
                isHeader = false;
                count++;
            });
            this.setState({
                Players: players
            })
        }
    }


    render() {
        return (
            <Col className="playerStatsPage">
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

export default withRouter(PlayerStatsComponent);