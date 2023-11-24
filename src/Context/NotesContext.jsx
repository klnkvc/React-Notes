import {createContext} from "react";

export const NoteContext = createContext({
    noteStore : [],
    addNotes:()=>{},
    deleteNotes:()=>{},
    archiveNotes:()=>{},
    // searchNotes:()=>{}
})