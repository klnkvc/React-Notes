import Navbar from "./Components/Navbar.jsx";
import InputForm from "./Components/InputForm.jsx";
import NotesContainer from "./Components/NotesContainer.jsx";
import {useState} from "react";
import {getInitialData, showFormattedDate} from "./index.js";
import {NoteContext} from "./Context/NotesContext.jsx";

function App() {
    const [NotesData, setNotesData] = useState({
        notesStore : getInitialData()
    })
    // const [originalData, setOriginalData] = useState(NotesData.notesStore)
    // const [search,setSearch] = useState('')


    const handleAddNotes = ({notesTitle, notesBody})=>{
        // console.log(({id:+new Date(), title:notesTitle, body:notesBody, createdAt:showFormattedDate(+new Date()), archived:false }))
        const addNotesData = [...NotesData.notesStore, {id:+new Date(), title:notesTitle, body:notesBody, createdAt:showFormattedDate(+new Date()), archived:false }]
        setNotesData({notesStore: addNotesData})
    }

    const handleDeleteNotes = (notesId) =>{
        const deletedNotes = NotesData.notesStore.filter(e=> e.id !== notesId)
        setNotesData({notesStore: deletedNotes})
    }

    const handleArchiveNotes = (notesId)=>{
        const archiveTemp = NotesData.notesStore.map(e=>e.id===notesId?{...e, archived:!e.archived}:e)
        setNotesData({notesStore: archiveTemp})

    }

    // const handleSearch = (searches)=>{
    //     setSearch(searches)
    //     setOriginalData(NotesData.notesStore)
    //     const filteredNotes = searches?NotesData.notesStore.filter(e=>e.title.toLowerCase().includes(search.toLowerCase())):originalData
    //     setNotesData({notesStore: filteredNotes})
    // }
    // console.log(NotesData.notesStore)
    // console.log(originalData)

    const contextValue = {
        noteStore: NotesData.notesStore,
        addNotes:handleAddNotes,
        deleteNotes:handleDeleteNotes,
        archiveNotes:handleArchiveNotes,
        // searchNotes:handleSearch
    }

    return (
        <NoteContext.Provider value={contextValue}>
            <Navbar/>
            <div className='flex flex-col items-center mt-10'>
                <InputForm/>
            </div>
            <NotesContainer title='Notes'/>
            <NotesContainer title='Archived'/>
        </NoteContext.Provider>
    )
}

export default App
