import { Schema, model } from "mongoose";


const registrationSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})


const Registration = model("registration", registrationSchema)

export default Registration