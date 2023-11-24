import { Schema, model } from "mongoose";


const loginSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: String
})


const Login = model("login", loginSchema)

export default Login