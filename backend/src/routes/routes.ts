import express from "express"
import * as notesController from "../controllers/notes"

const router=express.Router()

router.get("/",notesController.getAllNotes)
router.post("/",notesController.createNote)


export default router