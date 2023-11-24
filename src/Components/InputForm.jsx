import NotesButton from "./NotesButton.jsx";
import {useContext, useRef, useState} from "react";
import {NoteContext} from "../Context/NotesContext.jsx";


const InputForm = () =>{
    const {addNotes} = useContext(NoteContext)
    const getBody = useRef()
    const labelStyle = 'w-1/5 text-center my-auto font-semibold'
    const inputStyle = 'w-4/5 border p-2 rounded-2xl'
    const inputDivStyle = 'flex justify-between m-2'
    const handleAddNotes = ()=>{
        addNotes({notesTitle:word, notesBody:getBody.current.value})
        setWord('')
        getBody.current.value = ''
    }
    const [word,setWord]=useState('')
    const handleLimit = (e)=>{
        const inputValue = e.target.value
        if(inputValue.length<=50){
            setWord(inputValue)
        }
    }

    return <div className='shadow w-1/3 rounded-2xl py-2 px-5'>
        <h1 className='text-center font-bold text-2xl'>Notes</h1>
        <form action="" className='flex flex-col justify-center'>
            <div className={inputDivStyle}>
                <label htmlFor="titleInput" className={labelStyle}>Title</label>
                <div className='w-4/5 flex flex-row'>
                    <input type="text" name='titleInput' className='w-full border p-2 rounded-2xl' placeholder='Input Title' onChange={handleLimit} value={word}/>
                    <p className='self-center font-thin text-gray-400 px-2'>{word.length}/50</p>
                </div>
            </div>
            <div className={inputDivStyle}>
                <label htmlFor="notesInput" className={labelStyle}>Notes</label>
                <textarea ref={getBody} name="notesInput" id="notesInput" cols="30" rows="2" placeholder='Input Notes' className={inputStyle} ></textarea>
            </div>
            <NotesButton title='Add Notes' color='bg-blue-500' clickHandler={handleAddNotes}/>
        </form>
    </div>
}
export default InputForm