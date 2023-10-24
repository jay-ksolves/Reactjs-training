import React from 'react';
import { add, subtract, multiply, divide } from './calculate';
function result() {
    return (
        <div className="card bg-dark text-info d-grid mx-auto p-3 m-4">
            <ul>
                <li>{add()}</li>
                <li>{subtract()}</li>
                <li>{multiply()}</li>
                <li>{divide()}</li>
            </ul>
        </div>
    );
}
export default result;