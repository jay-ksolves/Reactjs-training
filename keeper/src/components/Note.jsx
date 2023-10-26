import React from 'react';
function Note(props) {


    function handleClick() {
        props.onDelete(props.id);
    }



    return (
        <div className='note'>
            {/* <p>{props.key}</p> */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick} className='fa fa-trash text-danger img-thumbnail'></button>

        </div>
    );
}

export default Note;