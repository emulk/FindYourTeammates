import React, { Component } from 'react';
import { } from 'react-bootstrap';


class PlayerRowComponent extends Component {
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

        if (this.props.stats) {
            var stats = this.props.stats.split(",");
            id = stats[0];
            name = stats[1];
            kill = stats[2];
            death = stats[3];
            kdscore = (kill/death).toFixed(2);
        }
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{kill}</td>
                <td>{death}</td>
                <td>{kdscore}</td>
            </tr>
        );
    }
}

export default PlayerRowComponent;