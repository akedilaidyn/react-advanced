import AddNoteForm from "./AddNoteForm";
import NotesList from "./NotesList";
import NotesProvider from "./NotesProvider";

export default function Task6() {
  return (
    <article className="space-y-8">
      <h1 className="text-xl text-center">Task 6: Context API</h1>
      <NotesProvider>
        <AddNoteForm />
        <NotesList />
      </NotesProvider>
    </article>
  );
}
