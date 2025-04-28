import React, { useEffect, useState } from "react";
import Notes from "../notes/Notes";
import { Note as NoteModel } from "../../models/notes";
import * as NotesApi from "../../network/note_api";
import AddEditNoteDialog from "../addEditNoteDialog/AddEditNoteDialog";

interface MainProps{
  isAddNoteModalOpen:boolean
  onCloseAddNoteModal:()=>void
  
}

const Main = ({isAddNoteModalOpen,onCloseAddNoteModal}:MainProps) => {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  // const [ModalAddNoteOpen, setModalAddNoteOpen] = useState(false);
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
    <div className="p-5 max-lg:p-5 flex flex-col gap-8 relative">
    <h1 className="text-xl max-lg:text-sm font-bold border-b-2 border-border-color-4 pb-2 w-full">
      Notes Epinglées
    </h1>
    
    {/* Contenu principal avec overflow-x-hidden */}
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
      {notes.map((note) => (
        <Notes key={note._id} note={note} />
      ))}
    </div>

    {/* Modal en dehors du conteneur grid */}
    {isAddNoteModalOpen && (
      <div className="fixed inset-0 bg-bg-primary bg-opacity-50 z-40 flex items-center justify-center">
        <div className="bg-primary  max-w-lg w-full shadow  rounded-xl">
          <AddEditNoteDialog  onDismiss={onCloseAddNoteModal} onSave={(newNote)=>{
            setNotes([...notes,newNote]);
            onCloseAddNoteModal()
          }} />
        </div>
      </div>
    )}
  </div>
  );
};

export default Main;
