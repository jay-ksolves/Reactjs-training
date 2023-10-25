import React, { Component } from 'react';

class Learningstate extends Component {

    constructor() {
        super();
        this.state = { message: "Click to subscribe..!" }
    }

    changeMessage() {
        this.setState({ message: "Thanks for subscribing." });
        document.getElementById("subscribe").innerHTML = 'Unsubscribe';
    }
    render() {
        return (
            <div>

                <h1>
                    Hello state
                    <hr />
                    <p> {this.state.message}</p>
                </h1>
                <button onClick={() => this.changeMessage()} className='btn btn-danger' id='subscribe'>Suscribe</button>
            </div>);
    }
}

export default Learningstate;