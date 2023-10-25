import React, { Component } from 'react';


class Learingpropsclass extends Component {
    render() {
        return (
            <div>

                <h1>
                    Hi this is a class components...
                </h1>
                <p> {this.props.name}</p>
                <p>{this.props.children}</p>

            </div>
        );
    }
}

export default Learingpropsclass;