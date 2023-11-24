import Notes from "./Notes.jsx";
import {useContext} from "react";
import {NoteContext} from "../Context/NotesContext.jsx";

const NotesContainer = ({title}) =>{
    const {noteStore} = useContext(NoteContext)
    const notArchived = noteStore.filter(e=> e.archived===false)
    const archived = noteStore.filter(e=> e.archived===true)
    const ifArchived = ()=>{
        if(title==='Notes'){
            return notArchived.length==0?<p>No Data Stored</p>:(notArchived.map((e)=><Notes info={e} key={e.id}/>))
        }else {
            return archived.length==0?<p>No Data Stored</p>:(archived.map((e)=><Notes info={e} key={e.id} />))
        }
    }
    return <div className='border shadow m-10 rounded-2xl py-2 px-10 mt-10 flex flex-col justify-center'>
        <h1 className='text-3xl py-2 font-bold mt-4'>{title}</h1>
        <div className='my-5 flex flex-row flex-wrap gap-10 justify-center'>
            {ifArchived()}
        </div>
    </div>
}

export default NotesContainer