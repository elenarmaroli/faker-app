import express from "express"
import { check, validationResult } from "express-validator"
import Login from "../modules/login.js"
import Registration from "../modules/registration.js"

let router = express.Router()

router.post("/", 
    check("email").notEmpty().withMessage("Email is required"), 
    check("email").isEmail().withMessage("Email is not valid"),
    check("password").notEmpty().withMessage("Password is not required"),
    check("password").isLength({min: 5}).withMessage("Not a strong password"),
    async (req, res) => {
        const error = validationResult(req)
    
    if (!error.isEmpty()) {
        return res.status(400).json({error: error.array()})
    }   

    const user = await Registration.findOne({email: req.body.email})
    if (user && user.password == req.body.password) {
        //console.log(user.password);
        res.send({success: true})
    } else {
        console.log("Login failed.");
    }
})

export default router