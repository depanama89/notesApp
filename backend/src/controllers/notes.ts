import { RequestHandler } from "express"

export const getNotes:RequestHandler=async(req,res)=>{
    try {
        console.log("Get notes");
        
        res.status(200).json({message:"Get notes"})
    } catch (error) {
        
    }
}