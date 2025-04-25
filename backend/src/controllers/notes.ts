import { RequestHandler } from "express"
import NoteModel from "../models/notes"
import createHttpError from "http-errors"


interface createNoteBody{
    title?:string
    text?:string
    category?:string
}
    
export const getAllNotes:RequestHandler=async(req,res,next)=>{
    try {
        const notes= await NoteModel.find().exec()
        res.status(200).json(notes)
    } catch (error) {
        next(createHttpError(500,"Could not fetch notes"))
    }
}


export const createNote:RequestHandler<unknown,unknown,createNoteBody,unknown>=async(req,res,next)=>{
const title=req.body.title
const text=req.body.text
const category=req.body.category

    try {
        if(!title || !category){
            throw createHttpError(400,"title and category are required")
        }

        const newNote=await NoteModel.create({
            title,
            text,
            category
        })
        res.status(201).json(newNote)
        
    } catch (error) {
       next(error) 
    }
}