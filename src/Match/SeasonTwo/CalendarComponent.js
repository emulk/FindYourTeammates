import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.createCalendar = this.createCalendar.bind(this);
    }

    componentDidMount() {
    }



    createCalendar() {
        return { __html: '<iframe src="https://teamup.com/ksd1rmwfymndwvmv5e" style="width: 100%; height: 800px; border: 1px solid #cccccc" frameborder="0" />' }
    }

    render() {
        return (

            <Row>
                <Col>
                    <div dangerouslySetInnerHTML={this.createCalendar()} ></div>
                </Col>
            </Row>
        );
    }
}

export default withRouter(CalendarComponent);