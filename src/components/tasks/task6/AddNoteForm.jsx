import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";
import { Field, Input, Button } from "../../shared";

export default function AddNoteForm() {
  const { addNote } = useContext(NotesContext);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ id: Date.now(), mentee: name, content });
    setName("");
    setContent("");
  };

  return (
    <form className="flex flex-col max-w-lg mx-auto gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <Field>
        <label>Mentee name</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>
      <Field>
        <label>Note</label>
        <Input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Field>
      <Button onClick={handleSubmit}>Add Note</Button>
    </form>
  );
}
