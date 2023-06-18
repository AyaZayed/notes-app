import React from 'react'
import { useState } from 'react'

export default function AddNote({ addNote }) {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

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
            <textarea rows={5} maxLength='200' placeholder='Type to add a note...' value={noteText} onChange={handleChange}></textarea>
            <div className='note-footer'>
                <p>{characterLimit - noteText.length} Remaining</p>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
