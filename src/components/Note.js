import React from 'react'
import { useState } from 'react'

export default function Note({ note, deleteNote, updateNote }) {
    const [isEditing, setIsEditing] = useState(false)
    const [remaining, setRemaining] = useState(false)

    return (
        <div className='note'>
            <textarea rows={5} maxLength='200' value={note.text} onChange={(e) => { updateNote(note.id, e.target.value); setIsEditing(true); setRemaining(true) }}>
            </textarea>
            <div className='note-footer'>
                <p className='info'>{isEditing && remaining ? `${200 - note.text.length} remaining` : `${note.date}`}</p>
                {isEditing ? (
                    <button className='save' onClick={() => setIsEditing(false)}>Save</button>
                ) :
                    (<button className='delete' onClick={() => deleteNote(note.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                    </button>)
                }

            </div >
        </div >
    )
}
