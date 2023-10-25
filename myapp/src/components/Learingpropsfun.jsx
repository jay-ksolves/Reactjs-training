import React from 'react';
const Learningpropsfun = (props) => {
    return (
        <div>
            <h1 className='text-center  text-info'>Learning props in function
                <br /></h1>
                <hr/>
            {props.children}
                <p> {props.name}</p>
        </div>
    );
}

export default Learningpropsfun;