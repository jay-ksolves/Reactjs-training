import React from 'react';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import CounterCompo from './CounterCompo';


function App() {
  return (
    <div className="container-fluid">

      <Usestate />
      <br />
      <Useeffect />

      <br />
      <CounterCompo />
      <br />
    </div>
  );
}

export default App;
