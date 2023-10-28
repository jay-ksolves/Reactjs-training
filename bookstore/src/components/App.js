import React from 'react';
import Login from './Login';
import Error from './Error';
import Show from './Show';
import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <h1>Hello reading lovers</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Show />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
