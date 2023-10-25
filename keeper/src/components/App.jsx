import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

// function createNotes(notes) {
//   return <Note title={notes.title} content={notes.content} />;

// }


function App() {
  return (

    <div>
      <Navbar />
      {/* {notes.map(createNotes())} */}
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );

}
export default App;