import React from 'react';
import Title from './Title';
import { Content } from './Content';
import Comment from './Comment';
import Learningpropsfun from './Learingpropsfun';

function App() {
    return (
        <div>
            <p> (from app.jsx)</p>
            <Title />
            <Content />
            <Comment />
            <hr />
            <Learningpropsfun name="  ---Hlw this is a prop (object)--">
                <p>THis is a children prop in Learning props in functional components</p>
                <p>this and above line are called o render by passing props.children</p>
            </Learningpropsfun>
        </div>);
}

export default App;