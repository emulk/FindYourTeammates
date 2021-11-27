import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import './PlayerStatsComponentStyle.css';

class PlayerStatsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }

    componentDidMount() {
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