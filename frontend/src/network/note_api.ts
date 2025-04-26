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
    if(!process.env.REACT_APP_NETWORK_URL){
        throw new Error("REACT_APP_NETWORK_URL is not defined")
    }
    const response = await fecthData(process.env.REACT_APP_NETWORK_URL,{
        method:"GET"
    })

    return response.json()
}

