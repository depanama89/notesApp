import { Clock, EllipsisVertical } from "lucide-react";
import React from "react";
import { Note as NoteModel } from "../../models/notes";
// onNoteClick:(note:NoteModel)=>void
//     onDeleteNote:(note:NoteModel)=>void
interface NotesProps {
  note: NoteModel;
}

const Notes = ({ note }: NotesProps) => {
  function formatText(note: NoteModel) {
    if (!note.text || note.text.trim() === "") return "";
    return note.text.length > 100 ? `${note.text.slice(0, 100)}...` : note.text;
  }
  return (
    <div className="flex flex-col gap-6 px-6 py-6 bg-bg-card rounded-2xl border border-border-color w-full">
      <div className="flex  justify-between  items-center">
        <h2 className="text-base font-bold">{note.title}</h2>{" "}
        <EllipsisVertical className="cursor-pointer" />
      </div>
      <p className="overflow-hidden">{formatText(note)}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <span className="border  rounded-xl px-2 py-1 text-text-span">
            Travail
          </span>
          <span className="border  rounded-xl px-2 py-1 text-text-span">
            Personnel
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4" />
          <img src="/profil.png" alt="profil" className="w-4 h-4" />
          <span className="text-text-span">il y a 7 jours</span>
        </div>
      </div>
    </div>
  );
};

export default Notes;
