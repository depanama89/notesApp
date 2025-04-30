import { Clock, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Note as NoteModel } from "../../models/notes";
// onNoteClick:(note:NoteModel)=>void
//     onDeleteNote:(note:NoteModel)=>void
interface NotesProps {
  note: NoteModel;
  onNoteClicked: (note: NoteModel) => void;
  onEditClicked: (note: NoteModel) => void;
}

const Notes = ({ note, onNoteClicked, onEditClicked }: NotesProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // const { title, text, category } = note;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  function formatText(note: NoteModel) {
    if (!note.text || note.text.trim() === "") return "";
    return note.text.length > 100 ? `${note.text.slice(0, 100)}...` : note.text;
  }
  return (
    <div className="flex flex-col gap-6 px-6 py-6 bg-bg-card rounded-2xl border border-border-color w-full cursor-pointer relative">
      <div className="flex  justify-between  items-center">
        <h2 className="text-base font-bold">{note.title}</h2>{" "}
        <EllipsisVertical
          className="cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && (
        <div
          ref={menuRef}
          className="absolute top-5 bg-primary w-44 h-24
           shadow-lg rounded-lg right-[-100px] z-50"
        >
          <ul className="flex flex-col gap-4 px-3 py-3">
            <li
              className="flex gap-4 items-center cursor-pointer"
              onClick={() => {
                onNoteClicked(note);
                setShowMenu(false);
              }}
            >
              Edit <Pencil className="w-4 h-4  text-bg-primary" />
            </li>
            <li className="flex gap-4 items-center cursor-pointer">
              Supprimer <Trash2 className="w-4 h-4 text-bg-primary" />
            </li>
          </ul>
        </div>
      )}
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
