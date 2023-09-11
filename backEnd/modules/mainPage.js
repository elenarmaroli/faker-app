import { Schema, model } from "mongoose";


const mainPageSchema = new Schema({
    fullName: String,
    jobTitle: String,
    jobType: String,
    gender: String,
    image: String
})


const MainPage = model("MainPage", mainPageSchema)

export default MainPage