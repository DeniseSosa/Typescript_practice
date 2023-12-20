import  express  from "express"; // ES MODULES siempre utilizo ecma script
const router = express.Router();
// const express = require ("express") //commmonjs cuando se compila
import * as diaryServices from "../services/diaryServices";

router.get("/", (_req,res)=>{
    res.send(diaryServices.getEnteriesWithoutSensitiveInfo())
})

router.get("/:id", (req,res)=>{
    const diary = diaryServices.findById(+req.params.id)
    return(diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post ("/", (req,res)=>{
    const {date, weather, visibility, comment} = req.body
    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
    })
    res.json(newDiaryEntry)
})

export default router;