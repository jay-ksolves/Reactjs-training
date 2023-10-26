import React, { useState } from 'react';

function Usestate() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    return (
        <div className='text-center'>
            <h1 className='txt-center text-info'>increment Count using UseState</h1>
            <hr />
            <h2>Count is :{count}</h2>
            <button onClick={increment} className='btn btn-info fa '>+</button>
        </div>
    )
}

export default Usestate;