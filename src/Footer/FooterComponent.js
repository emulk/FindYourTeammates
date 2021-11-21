import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './FooterComponentStyle.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handle = this.handle.bind(this);
    }

    handle(){

    }

    render() {
        return (
            <Row >
                <Col className="footerStyleCol">
                    <Row>
                        <Col >
                            <Row className='footerTextStyle'>
                                Designed with <FontAwesomeIcon icon={faHeart} className="footerHeart" /> by <a href='https://www.elegantweb.it' target='_blank' className='footerLink'>Elegantweb.it</a>
                            </Row>
                        </Col>
                        <Col >
                            <Row>

                                <Col className="footerSocialIcon">
                                    <Row >
                                        <Col className="footerIcon">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elegantweb.it/FindYourTeammates/" target="_blank">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </a>
                                        </Col>
                                        <Col className="footerIcon">
                                            <a href="https://twitter.com/share?url=https://www.elegantweb.it/FindYourTeammates/&amp;text=Covid19&amp;hashtags=Covid19" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </Col>
                                        <Col className="footerIcon">
                                            <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.elegantweb.it/FindYourTeammates/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="buymeacoffeeFooterStyle">
                                    <a href='https://ko-fi.com/J3J41QR7Y' target='_blank'><img height='36' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row >
        );
    }
}


export default Footer;