import NotesButton from "./NotesButton.jsx";
import {useContext} from "react";
import {NoteContext} from "../Context/NotesContext.jsx";

const Notes = ({info})=>{
    const {deleteNotes, archiveNotes} = useContext(NoteContext)
    const handleDelete = () =>{
        deleteNotes(info.id)
    }
    const handleArchive = () =>{
        archiveNotes(info.id)
    }
    return <div className='w-96 shadow shadow-black rounded-2xl flex flex-col items-center px-3'>
        <h1 className='text-2xl font-mono font-semibold my-2'>{info.title}</h1>
        <div className='mx-3 w-full py-3 px-6 h-72 font-semibold border rounded-xl'>
            <pre className='whitespace-pre-wrap'>{info.body}</pre>
        </div>
        <div className='flex flex-row justify-around w-full my-2 px-8'>
            <NotesButton title={info.archived?'Restore':'Archive'} color={info.archived?'bg-green-500':'bg-yellow-500'} clickHandler={handleArchive}/>
            <NotesButton title='Delete' color='bg-red-500' clickHandler={handleDelete}/>
        </div>
    </div>
}

export default Notes