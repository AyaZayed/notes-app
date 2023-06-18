import './css/App.css'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Note from './components/Note'
import AddNote from './components/AddNote'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021'
    }
  ])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes))
  }, [notes])

  function addNote(text) {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  function searchNotes(text) {
    if (text === '') {
      setNotes(notes)
      return
    }
    const updatedNotes = notes.filter(note => note.text.toLowerCase().includes(text.toLowerCase()))
    setNotes(updatedNotes)
  }

  function updateNote(id, text) {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        note.text = text
      }
      return note
    })
    setNotes(updatedNotes)
  }

  return (
    <div className='home' data-theme={theme}>
      <div className='header'>
        <h1>Notes</h1>
        <button className='theme-btn'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
      </div>
      <div className='search'>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input type='text' placeholder='type to search...' onChange={e => searchNotes(e.target.value)} />
      </div>
      <div className='notes'>
        {notes.map(note => (
          <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
        ))}
        <AddNote addNote={addNote} />
      </div>
    </div>
  )
}
