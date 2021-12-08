import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { faTrophy, faSort } from '@fortawesome/free-solid-svg-icons';
import S2Group1Component from './S2Group1Componet';
import S2Group2Component from './S2Group2Componet';
import './Season2ComponentStyle.css';

class Season2Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGroup1: true,
            showGroup2: false
        };

        this.showGroup1Function = this.showGroup1Function.bind(this);
        this.showGroup2Function = this.showGroup2Function.bind(this);

    }

    componentDidMount() {
    }

    showGroup1Function() {
        this.setState({
            showGroup1: true,
            showGroup2: false
        })
    }

    showGroup2Function() {
        this.setState({
            showGroup1: false,
            showGroup2: true
        })
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Button variant="outline-primary" className="GroupMenu1Buttons" onClick={this.showGroup1Function}>Group 1</Button>

                    </Col>
                    <Col>
                        <Button variant="outline-primary" className="GroupMenu2Buttons" onClick={this.showGroup2Function}>Group 2</Button>
                    </Col>
                </Row>

                {
                    this.state.showGroup1 &&
                    <S2Group1Component />
                }

                {
                    this.state.showGroup2 &&
                    <S2Group2Component />
                }
            </>
        );
    }
}

export default withRouter(Season2Component);