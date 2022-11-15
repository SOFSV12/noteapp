import AddNote from "./AddNote";
import React from "react";
import Note from "./Note";
import { userNote } from "../models/models";

const NotesList: React.FC<{
  onAddNote: (text: string) => void;
  onDeleteNote: (baseId: string) => void;
  notes: userNote[];
}> = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          baseId={note.baseId}
          id={note.id}
          key={note.id}
          text={note.text}
          date={note.date}
          onDeleteNote={onDeleteNote}
        />
      ))}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};

export default NotesList;
