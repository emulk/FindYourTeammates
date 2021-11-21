import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import { Table, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PewPewCupComponentStyle.css';

class PewPewCupComponent extends Component {
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
        let path = '/SeasonOne'; 
        this.props.history.push(path);
    }

    render() {
        return (
            <Col >
                <Row>
                    <Col xl={11} className="Season2Title">
                        Season 2
                    </Col>
                    <Col xl={1} onClick={this.SeasonOneClick} className="season1Link">
                        Season 1
                    </Col>
                </Row>
                
            </Col>
        );
    }
}

export default withRouter(PewPewCupComponent);