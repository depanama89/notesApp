import { RequestHandler } from "express";
import createHttpError from "http-errors";
import  CategoryModel from "../models/categories"

// inteface de creation de categories
interface createCategoryBody{
    libelle?:string
}


export const getAllCategories:RequestHandler=async(req,res,next)=>{
    try {
        const categories=await CategoryModel.find().exec()
        res.status(200).json(categories)
    } catch (error) {
        next(error)
    }
}

export const createCategory:RequestHandler<unknown,unknown,createCategoryBody,unknown>=async(req,res,next)=>{

    const libelle=req.body.libelle
    try {

     if(!libelle){
        throw createHttpError(400,"libelle is required")
     }  
     
     const newCategory=await CategoryModel.create({
        libelle
     })
     res.status(201).json(newCategory)
    } catch (error) {
       next(error) 
    }

}