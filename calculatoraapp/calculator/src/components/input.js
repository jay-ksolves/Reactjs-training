import React from 'react';
import calculate from './calculate';

function input() {
    return (
        <div className='d-flex d-grid gap-2 p-2 mx-auto'>
            <input type="number" id="input1" placeholder='Enter value of a' name='a' className='form-control' defaultValue={0} /><br />
            <input type="number" id="input2" placeholder='Enter value of b' name='b' className='form-control' defaultValue={0} /><br />
            <button onClick={calculate} className='btn btn-info fa fa-solid btn-sm'> calculate</button><br />
        </div>);
}

export default input;