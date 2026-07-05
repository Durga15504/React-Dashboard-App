import { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Button from "../UI/Button";
import Card from "../UI/Card";

function Notes() {

  const [notes, setNotes] = useLocalStorage("developer-notes", []);                    //store all notes

  const [noteText, setNoteText] = useState("");                                      //current input
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function addNote() {
    if (!noteText.trim()) 
      return;
    const newNote = { id: Date.now(), text: noteText.trim(), createdAt: new Date().toLocaleTimeString() };
    setNotes(prev => [...prev, newNote]);
    setNoteText("");
  }

  function deleteNote(id) {

    setNotes(
      notes.filter(note => note.id !== id)
    );
  }

  function saveEdit(id) {
    const updatedNotes = notes.map(note => note.id === id ? 
      {...note, text: editText} : note );
    setNotes(updatedNotes);
    setEditingId(null);
    setEditText("");
  }

  return (

    <Card>
      <h2>📝 Developer Notes</h2>
      <textarea rows="5" cols="50" maxLength={300} placeholder="Write today's progress..." 
                       value={noteText} onChange={(e) => setNoteText(e.target.value)} />
      
      <br /><br />
      <Button onClick={addNote}> Add Note </Button>
      <p> {noteText.length} / 300 Characters </p>
      <hr />
      <h3> Saved Notes ({notes.length}) </h3>

      {
        notes.length === 0 ? <p>No notes yet.</p> : notes.map(note => (
        <div key={note.id}  style={{ border:"1px solid gray",padding:"10px",marginBottom:"10px",borderRadius:"8px"}}>
          {
          editingId === note.id ? (
          <textarea rows="4" cols="45" value={editText} onChange={(e) => setEditText(e.target.value) } />
          ) : ( 
          <p>{note.text}</p>
          )
          }
          {
        editingId === note.id &&
        <Button onClick={() => saveEdit(note.id)} > Save </Button>
      }
          <small> Saved at {note.createdAt} </small>
          <br /><br />
          <Button onClick={() => { setEditingId(note.id); setEditText(note.text); }} > Edit </Button>
          <Button onClick={() => deleteNote(note.id)} > Delete </Button>
        </div>
        ))
      }

    </Card>
  );

}

export default Notes;
