import "dotenv/config"
import express from "express"
import notesRoutes from "./routes/routes"
import NoteModel from "./models/notes"


const app=express()

app.use(express.json())

app.get("/",async(req,res)=>{
    const notes=await NoteModel.find().exec()
    res.status(200).json(notes)
})
// app.use("/api/notes",notesRoutes)

export default app