import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  const [isAddNoteModalOpen,setIsAddNoteModalOpen]=useState(false)
  return (
    <div className="h-screen w-screen bg-primary font-sans flex p-2.5">
      <Sidebar onAddNoteClick={()=>setIsAddNoteModalOpen(true)} />
      <div className="flex flex-col w-full flex-auto  ">
        <Header />
        <Main isAddNoteModalOpen={isAddNoteModalOpen}  onCloseAddNoteModal={()=>setIsAddNoteModalOpen(false)}/>
      </div>
    </div>
  );
}

export default App;
