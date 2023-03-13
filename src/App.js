import { useEffect, useState } from "react";
import Note from "./components/Note";
import InputArea from "./components/InputArea";

function App() {

  const initialState = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
    console.log(newNote);  
  };

  const deleteNote = (id) => {
    setNotes(notes => { return notes.filter((_, index) => {return index !==id})});
  };

  return (
    <div className="App">
      <div className="title">
      <h1>Keeper</h1>
      </div>
      <div className="middle">
        <InputArea onAdd={addNote}/>
      </div>
      <div className="container">
        {notes.map((note, index) =>
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote} 
            />
            )}
      </div>
    </div>
  );
}

export default App;
