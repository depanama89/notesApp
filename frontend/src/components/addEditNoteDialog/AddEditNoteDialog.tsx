import { X } from "lucide-react";
import React from "react";

const AddEditNoteDialog = () => {
  return (
    <div className=" w-full h-full    flex flex-col gap-4  px-6 py-3">
      <div className="w-full flex items-center justify-between ">
        <div className="">Add Note</div>
       <div className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-bg-card-3">
       <X  className="w-4 h-4"/>
       </div>
      </div>
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-bg-primary">
            Title
          </label>
          <input className="border border-border-color-3 outline-none rounded-lg w-full p-2 max-w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="text-bg-primary">
            Text
          </label>
          <textarea className="border border-border-color-3 outline-none rounded-lg w-full p-2 max-w-80"></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-bg-primary">
            Category
          </label>
          {/* <input className="border border-border-color-3 outline-none rounded-lg w-full p-2 max-w-80" /> */}
          <select
            name=""
            id=""
            className="border border-border-color-3 outline-none rounded-lg w-full p-2 max-w-80"
          >
            <option value="">Categories</option>
            <option value="">Ca</option>
          </select>
        </div>

        <div>
          <button className="px-6 py-2 rounded-xl border border-border-color-4">
            Save
          </button>
        </div>
      </form>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default AddEditNoteDialog;
