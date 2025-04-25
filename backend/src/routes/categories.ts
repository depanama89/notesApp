import express from "express"
import * as categoriesController from "../controllers/categories"

const router=express.Router()

router.get("/",categoriesController.getAllCategories)
router.post("/",categoriesController.createCategory)


export default router