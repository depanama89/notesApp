import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Note } from "../../models/notes";
import { useForm } from "react-hook-form";
import { NoteInput } from "../../network/note_api";
import { Category as CategoriesModel } from "../../models/categories";
import * as NotesApi from "../../network/note_api";

interface AddEditNoteDialogProps {
  noteToEdit?: Note;
  onDismiss: () => void;
  onSave: (note: Note) => void;
}
const AddEditNoteDialog = ({
  noteToEdit,
  onDismiss,
  onSave,
}: AddEditNoteDialogProps) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<NoteInput>({
    defaultValues: {
      title: noteToEdit?.title || "",
      text: noteToEdit?.text || "",
      category: noteToEdit?.category || "",
    },
  });
  const [category, setCategory] = useState<CategoriesModel[]>([]);


  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await NotesApi.fetchCategories();
        setCategory(categories);
      } catch (error) {
        console.log(error);
      }
    }
    loadCategories();
  }, []);

  async function onSubmit(input: NoteInput) {
    try {
      let responseNote: Note;
      if (noteToEdit) {
        responseNote = await NotesApi.updateNote(noteToEdit._id, input);
      } else {
        responseNote = await NotesApi.createNote(input);
      }
      onSave(responseNote);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className=" w-full h-full    flex flex-col gap-4  px-6 py-3">
      <div className="w-full flex items-center justify-between ">
        <div className="">{noteToEdit ? "Edit Note":"Add Note"}</div>
        <div
          className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full 
        hover:bg-bg-primary hover:bg-opacity-50 transition-all duration-200 ease-in-out hover:text-bg-card"
        >
          <X className="w-4 h-4" onClick={onDismiss} />
        </div>
      </div>
      <form
        id="addEditNoteForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-bg-primary">
            Title
          </label>
          <div>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: "Titre obligatoire" })}
              aria-invalid={errors.title ? "true" : "false"}
              className={`border border-opacity-50  outline-none rounded-lg w-full p-2 max-w-80 ${
                errors.title ? "border-red" : ""
              }`}
            />
            {errors.title && (
              <p className="text-red text-sm ">{errors.title.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="text-bg-primary ">
            Text
          </label>
          <textarea
            className="border border-opacity-50  outline-none rounded-lg w-full p-2 max-w-80"
            {...register("text")}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-bg-primary">
            Category
          </label>
          {/* <input className="border border-border-color-3 outline-none rounded-lg w-full p-2 max-w-80" /> */}
          <select
            className="border border-opacity-50  outline-none rounded-lg w-full p-2 max-w-80"
            {...register("category")}
          >
            <option>Selectionnez une categorie</option>
            {category.map((cat) => (
              <option key={cat._id} value={cat.libelle}>
                {cat.libelle}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            form="addEditNoteForm"
            className="px-6 py-2 rounded-xl border border-opacity-50"
            disabled={isSubmitted}
          >
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
