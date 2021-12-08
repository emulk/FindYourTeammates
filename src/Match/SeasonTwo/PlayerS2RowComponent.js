import React, { Component } from 'react';
import { } from 'react-bootstrap';


class PlayerS2RowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
    }

    render() {
        var id = 1;
        var name = "";
        var kill = 0;
        var death = 0;
        var kdscore = 0;

        if (this.props.Name) {

            name = this.props.Name;
            kill = this.props.Kill;
            death = this.props.Deaths;
            kdscore = (kill / death).toFixed(2);
        }
        return (
            <tr>
                <td>{name}</td>
                <td>{kill}</td>
                <td>{death}</td>
                <td>{kdscore}</td>
            </tr>
        );
    }
}

export default PlayerS2RowComponent;