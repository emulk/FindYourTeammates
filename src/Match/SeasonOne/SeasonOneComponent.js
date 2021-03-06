import React, { Component } from 'react';
import {  withRouter} from 'react-router-dom';
import { Row, Col,  Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import Group1Component from './Group1Component';
import Group2Component from './Group2Component';
import SemifinalsComponent from './SemifinalsComponent';
import './SeasonOneComponentStyle.css';

class SeasonOneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGroup1: true,
            showGroup2: false
        };

        this.showGroup1Function = this.showGroup1Function.bind(this);
        this.showGroup2Function = this.showGroup2Function.bind(this);
        this.SeasonOneClick = this.SeasonOneClick.bind(this);

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

    SeasonOneClick(){

    }

    render() {
        return (
            <Col >
                <SemifinalsComponent />
                <Row>
                    <Col>
                        <Button variant="outline-primary" className="GroupMenu1Buttons" onClick={this.showGroup1Function}>Group 1</Button>

                    </Col>
                    <Col>
                        <Button variant="outline-primary" className="GroupMenu2Buttons" onClick={this.showGroup2Function}>Group 2</Button>
                    </Col>
                </Row>

                {this.state.showGroup1 &&
                    <Group1Component />
                }

                {this.state.showGroup2 &&
                    <Group2Component />
                }
            </Col>
        );
    }
}

export default withRouter(SeasonOneComponent);