import { useState } from "react";

function InputArea(props) {

  let [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  let [buttonClick, setButtonClick] = useState(true)

  const handleChange = (event) => {
    const {value, name} = event.target;

    setNewNote(prev =>{
      return{
        ...prev,
        [name]: value} 
    });
  };
 
  const handleClick = (event) => {
    setButtonClick(!buttonClick)
    props.onAdd(newNote);
    setNewNote({
      title: "",
    content: ""
    });
    event.preventDefault();
  };

  return( 
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={newNote.title}>
        </input>
        <textarea
          rows="4"
          placeholder="Write note here..."
          name="content"
          onChange={handleChange}
          value={newNote.content}>
        </textarea>
        <button
          onClick={handleClick}
          className={buttonClick ? "" : "click"}
          >Add</button>
      </form>
  );
}

export default InputArea;