import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faMap, faHeadset, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import './HeaderComponent.css';

class HeaderCompontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: '',
            lang: 'en'
        };

        this.handleChangeLang = this.handleChangeLang.bind(this);
    }

    componentDidMount() {
        
    }    

    handleChangeLang(event) {
    }

    render() {
        return (
            <Row className="headerStyle">
                <Col className="col-md-4 siteIdentity">
                    <img src="Team.png" className="logo" alt="logo" /><span className="headerTitle">Find Your Teammates</span>
                </Col>

                <Col className="col-md-8 menuStyle">
                    <Row>

                        <Nav bg="transparent" expand="md" className="navBarHeaderStyle justify-content-center">
                            <Nav.Item className="headerNavItem">
                                <Nav.Link href="/FindYourTeammates/"><Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faServer} />
                                    </Col>
                                </Row>
                                    <Row>
                                        <Col>
                                            SERVERS
                                        </Col>
                                    </Row></Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="headerNavItem">
                                <Nav.Link href="#/Players">
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faHeadset} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            PLAYERS
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="headerNavItem">
                                <Nav.Link href="#/pewpewcup">
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faFlagCheckered} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            PEW PEW CUP
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="headerNavItem">
                                <Nav.Link href="#/Maps">
                                    <Row>
                                        <Col>
                                            <FontAwesomeIcon icon={faMap} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            MAPS
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>


                        </Nav>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withRouter(HeaderCompontent);