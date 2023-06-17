import React from 'react'
import { useState } from 'react'

export default function AddNote({ addNote }) {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    console.log(noteText)

    function handleChange(e) {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }

    }

    function handleSave() {
        if (noteText.trim().length > 0) {
            addNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className='note new-note'>
            <textarea rows='8' cols='10' placeholder='Type to add a note...' value={noteText} onChange={handleChange}></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
