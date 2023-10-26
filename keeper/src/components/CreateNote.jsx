import { useState } from 'react';

function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [errorMessage, seterrorMessage] = useState("");
    const [completionMessage, setCompletionMessage] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }

    function submitNote(event) {
        event.preventDefault();

        if (note.title.trim() === "" || note.content.trim() === "") {
            seterrorMessage("Error Please provide input");
            setCompletionMessage("");
            return;
        }
        props.onAdd(note);
        seterrorMessage("");
        setCompletionMessage("Task Added!");


        setNote({
            title: "",
            content: ""
        });
        setTimeout(() => {
            seterrorMessage("");
            setCompletionMessage("");
        }, 2000);
    }

    return (
        <div>
            <form>
                <p className='text-center text-warning fa fa-pen fa-solid text-lg' style={{ letterSpacing: "0.1em", fontSize: "1.6em" }}>Create Note</p>
                <input name="title" className='' value={note.title} placeholder='Title' onChange={handleChange} rows="2" />
                <textarea name="content" className='' value={note.content} placeholder='Take a note' onChange={handleChange} rows="3" />
                <button onClick={submitNote} className='fas'>Add</button>
            </form>
            {errorMessage && <div className=" fa text-danger text-center" style={{ letterSpacing: "0.1em", fontSize: "1.6em" }}>  {errorMessage}</div>}
            {completionMessage && <div className="fa text-success text-center" style={{ letterSpacing: "0.1em", fontSize: "1.6em" }}>{completionMessage}</div>}
        </div>
    )
}

export default CreateNote;
