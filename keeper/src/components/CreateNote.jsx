import { useState } from 'react';
function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    return (
        <div>

            <form>
                <p className='text-center text-warning fa fa-pen fa-solid' style={{ letterSpacing: "0.1em" }}>CreateNote</p>
                <input  name="title" className='' value={note.title} placeholder='Title' onChange={handleChange}  rows="2" />
                <textarea  name="content" className='' value={note.content} placeholder='Take a note ' onChange={handleChange} rows="3" />
                <button onClick={submitNote} className='fas'>Add</button>
            </form>
        </div>
    )
}

export default CreateNote;