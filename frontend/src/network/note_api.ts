import {Note} from "../models/notes"


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
    // const API_URL=process.env.REACT_APP_API_URL
   
    const response = await fecthData("/api/notes",{
        method:"GET"
    })

    return response.json()
}

