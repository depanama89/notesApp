import { InferSchemaType, model, Schema } from "mongoose";
import { title } from "process";

const noteSchema=new Schema({
    title:{type:String,required:true},
    text:{type:String},
    category:{type:String,required:true},

},{
    timestamps:true
})

type Note=InferSchemaType<typeof noteSchema>

export default model<Note>("Note",noteSchema)