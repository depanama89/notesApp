import {Note} from "../models/notes"

// definition de l'interface pour faire passer les parametres à la methode createNote

export interface NoteInput{
    title:string
    text:string
    category:string
}
// declaration de la variablr CONSTANTE API_URL
const API_URL=process.env.REACT_APP_API_URL


async function fecthData(url:RequestInfo,init?:RequestInit){
    const response=await fetch(url,init)
    if(response.ok){
        return response
    }else{
        const errorBody=await response.json()
        const errorMessage=errorBody.error

        throw new Error(errorMessage)
    }
}

export async function fecthNotes():Promise<Note[]>{
    
   
    const response = await fecthData(`${API_URL}/api/notes`,{
        method:"GET"
    })

    return response.json()
}



export async function createNote(note:NoteInput):Promise<Note>{
   const response=await fecthData(`${API_URL}/api/notes`,{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(note)
   })

   return response.json()
}

// update note
export async function   updateNote(noteId:string,note:Note):Promise<Note>{
    const response= await fecthData(`${API_URL}/api/notes/`+ noteId,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(note)
    })

    return response.json()
}

