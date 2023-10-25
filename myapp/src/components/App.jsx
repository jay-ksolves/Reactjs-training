import React from 'react';
import Title from './Title';
import { Content } from './Content';
import Comment from './Comment';
import Learningpropsfun from './Learingpropsfun';
import Learingpropsclass from './Learningpropsclass';

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

            <hr />
            <Learingpropsclass name=" --this line in a prob object in for class component" >
                <p>This is a chlidern prop in learniing props in Class Component</p>
            </Learingpropsclass>
        </div>);
}

export default App;