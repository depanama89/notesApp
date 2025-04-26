import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="h-screen w-screen bg-primary font-sans flex p-2.5">
      <Sidebar />
      <div className="flex flex-col w-full flex-auto  ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
