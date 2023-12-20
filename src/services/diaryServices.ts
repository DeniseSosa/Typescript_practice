import { DiaryEntry, newDiaryEntry, nonSensitiveInfoDiaryEntry} from "../types";
import diaryData from "./diary.json";

const diaries : Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEnteries = (): DiaryEntry[] => diaries

export const findById = (id: number): nonSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find( d=> d.id=== id)
    if(entry){
        const { comment,...diaryData} = entry
        return diaryData
    }
    return undefined
}

export const getEnteriesWithoutSensitiveInfo= (): nonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id,date,weather,visibility})=>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry=>{
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id))+1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
} 
