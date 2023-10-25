import React from 'react';
const Learningpropsfun = (props) => {
    return (
        <div>
            <h1>Learning props in function
                <br />
                <p> {props.name}</p></h1>
            {props.children
            }
        </div>
    );
}

export default Learningpropsfun;