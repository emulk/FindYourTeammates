import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Nav, Row, Col, Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHeadset, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import './PewPewCupComponentStyle.css';

class PewPewCupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.SeasonOneClick = this.SeasonOneClick.bind(this);

    }

    componentDidMount() {
    }


    SeasonOneClick() {
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
                <Row>
                    <Col>
                    </Col>
                </Row>

            </Col>
        );
    }
}

export default withRouter(PewPewCupComponent);