import React, { useEffect, useState } from "react";
import Notes from "../notes/Notes";
import { Note as NoteModel } from "../../models/notes";
import * as NotesApi from "../../network/note_api";
const Main = () => {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  const [notesLooading, setNotesLoading] = useState(true);

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fecthNotes();
        setNotes(notes);
      } catch (error) {
        console.log(error);
      }
    }
    loadNotes();
  }, []);
  return (
    <div className="p-5 max-lg:p-5   flex flex-col gap-8">
      <h1 className="text-xl max-lg:text-sm  font-bold  border-b-2 border-border-color-4 pb-2 w-full ">
        Notes Epinglées
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {notes.map((note) => (
          <Notes key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Main;
