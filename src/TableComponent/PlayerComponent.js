import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap';
import './PlayerComponentStyle.css';

class PlayerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };

        this.getPlayers = this.getPlayers.bind(this);
    }

    componentDidMount() {
        this.setState({
            players: this.props.players
        });
    }

    getPlayers() {
        if (this.props.players) {
            var teamColor = 'blueTeamRow';

            if (this.props.team !== 'blue') {
                teamColor = 'redTeamRow'
            }

            teamColor += " playerInfos";
            const items = []
            for (var i = 0; i < this.props.players.length; i++) {
                items.push(
                    <Row className={teamColor} key={i} >
                        <Col>
                            <span className="playerLevel">
                                {this.props.players[i].level}
                            </span>
                            <span className="playerTag">
                                {this.props.players[i].tag}
                            </span>
                            <span className="playerName">
                                {this.props.players[i].name}
                            </span>
                        </Col>
                    </Row>
                );
            }
            return items;
        }
    }


    render() {
        return (
            <Col >
                {this.getPlayers()}
            </Col>
        );
    }
}

export default PlayerComponent;