export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string,
}

// Utility pick: 
// export type nonSensitiveEntry = Pick <DiaryEntry, "id" | "date" | "weather" | "visibility" >

//Utility Omit
export type nonSensitiveInfoDiaryEntry = Omit <DiaryEntry, "comment">

export type newDiaryEntry = Omit <DiaryEntry, "id">
