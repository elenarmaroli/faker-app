import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import loginRoute from "./routes/loginRoute.js"
import registrationRoute from "./routes/registrationRoute.js"
import mainPageRoute from "./routes/mainPageRoute.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/login", loginRoute)
app.use("/registration", registrationRoute)
app.use("/main", mainPageRoute)

mongoose.connect("mongodb://localhost:27017/mernDB")
.then(() => console.log("DB Connected"))
.catch((err) => console.log("Error", err))


app.listen(5000, (req, res) => {
    console.log("Listening on port 5000");
})