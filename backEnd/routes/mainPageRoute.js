import express from "express"
import { faker } from '@faker-js/faker';
import MainPage from "../modules/mainPage.js";


let router = express.Router()

router.get("/", async (req, res) => {

    const myData = await MainPage.create({
        fullName: faker.person.fullName(),
        jobTitle: faker.person.jobTitle(),
        jobType: faker.person.jobType(),
        gender: faker.person.gender(),
        image: faker.image.avatar()
    })

    myData.save()
    //console.log(myData);
    res.json(myData)
    
})
export default router