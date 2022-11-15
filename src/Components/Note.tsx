import { MdDeleteForever } from "react-icons/md";
import React from "react";

interface IProps {
  baseId: string;
  text: string;
  date: string;
  onDeleteNote: (baseId: string) => void;
  id: string;
}

const Note: React.FC<IProps> = ({ baseId, text, date, onDeleteNote, id }) => {
  const deleteNoteHandler = () => {
    onDeleteNote(baseId);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={deleteNoteHandler}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
