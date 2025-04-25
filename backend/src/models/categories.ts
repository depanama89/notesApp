import { InferSchemaType, model, Schema } from "mongoose"


const categorySchema=new Schema({
    libelle:{type:String,required:true}
},{timestamps:true})

type Category=InferSchemaType<typeof categorySchema>

export default model<Category>("Category",categorySchema)