import express from "express"
import { check, validationResult } from "express-validator"
import Registration from "../models/registration.js"

let router = express.Router()

router.post("/", 
    check("firstName").notEmpty().withMessage("First name is required"), 
    check("lastName").notEmpty().withMessage("Last name is not valid"),
    check("email").notEmpty().withMessage("Email is required"),
    check("email").isEmail().withMessage("Email is not valid"),
    check("password").notEmpty().withMessage("Password is required"),
    check("password")
    .isLength({min: 5})
    //.matches()
    .withMessage("Not a strong password"),
    async (req, res) => {
        const error = validationResult(req)
    
    if (!error.isEmpty()) {
        return res.status(400).json({error: error.array()})
    }   
    const myData = await Registration.create(req.body)
    res.json({success: true})
    
})
export default router