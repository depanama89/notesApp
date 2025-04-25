import { RequestHandler } from "express"
import NoteModel from "../models/notes"
import createHttpError from "http-errors"
import mongoose from "mongoose"


interface createNoteBody{
    title?:string
    text?:string
    category?:string
}

// pour specifier que cette methode attend une variable noteID
interface updateNoteParams{
noteId:string 
}

interface updateNoteBody{
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

export const updateNote:RequestHandler<updateNoteParams,unknown,updateNoteBody,unknown>=async(req,res,next)=>{

    const noteId=req.params.noteId
    const newTitle=req.body.title
    const newText=req.body.text
    const newCategory=req.body.category
    try {
        // verification si l'id est valide
        if(!mongoose.isValidObjectId(noteId)){
            throw createHttpError(400,"Invalid note id")
        }
 
        // verification si la note existe
        if(!newTitle  ){
            throw createHttpError(400,"title is  required")

        }

        if(!newCategory){
            throw createHttpError(400,"category is required")
        }

        const note=await NoteModel.findById(noteId).exec()

        if(!note){
            throw createHttpError(404,"Note not found")
        }

        note.title=newTitle
        note.text=newText
        note.category=newCategory

        const updatedNote=await note.save()

        res.status(200).json(updatedNote)
       
     
    
    } catch (error) {
        next(error)
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

export const getNoteById:RequestHandler=async(req,res,next)=>{
    const noteId=req.params.noteId

    try{

        // verification si l'id est valide
        if(!mongoose.isValidObjectId(noteId)){

            throw createHttpError(400,"Invalid note id")
        }

        const note=await NoteModel.findById(noteId).exec()

        if(!note){
            throw createHttpError(404,"Note not found")
        }

        res.status(200).json(note)
    }catch(error){
        next(error)
    }
}

export const deleteNote:RequestHandler=async(req,res,next)=>{
    const noteId=req.params.noteId

    try{

        if(!mongoose.isValidObjectId(noteId)){
            throw createHttpError(400,"Invalid note id")
        }

        const note=await NoteModel.findById(noteId).exec()

        if(!note){
            throw createHttpError(404,"Note not found")
        }

        await note.deleteOne()

        res.status(204).send("suppression reussie")
    }catch(error){
        next(error)
    }
}
