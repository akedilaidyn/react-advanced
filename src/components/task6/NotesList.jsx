import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export default function NotesList() {
  const { notes } = useContext(NotesContext);

  return (
    <ul className="max-w-lg mx-auto flex flex-col space-y-8">
      {notes.map((note) => (
        <li
          key={note.id}
          className="border border-gray-300 rounded-lg p-4 shadow-md"
        >
          <strong>{note.mentee}</strong> <i>{note.content}</i>
        </li>
      ))}
    </ul>
  );
}
