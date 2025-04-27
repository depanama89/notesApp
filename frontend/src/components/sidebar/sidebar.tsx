import { Plus } from "lucide-react";
import React from "react";

interface SidebarProps{
  onAddNoteClick:()=>void
}
const Sidebar = ({onAddNoteClick}:SidebarProps) => {
  return (
    <div className="max-w-full w-64 border border-border-color-4 ms:w-32 flex flex-col gap-6 p-2">
      <button className="px-3 py-3 flex gap-3 bg-bg-primary rounded-lg text-text-color-4  justify-center items-center" onClick={onAddNoteClick}>
        
        <Plus className="text-text-color-4 w-5 h-5" />
        Nouvelle Note
      </button>
      <div>

      </div>
    </div>
  );
};

export default Sidebar;
