import React, { useState, useEffect } from 'react';
import './App.css';
import { FaThumbtack, FaTrash, FaEdit, FaBell, FaPlus } from 'react-icons/fa';

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || []);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [reminder, setReminder] = useState('');
  const [font, setFont] = useState('Arial');
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSave = () => {
    const newNote = { title, content, reminder, font, pinned: false };
    const updatedNotes = editIndex !== null
      ? notes.map((note, index) => (index === editIndex ? newNote : note))
      : [...notes, newNote];

    setNotes(updatedNotes);
    resetFields();
  };

  const resetFields = () => {
    setTitle('');
    setContent('');
    setReminder('');
    setFont('Arial');
    setEditIndex(null);
    setShowForm(false); // hide form after saving
  };

  const handleDelete = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  const handleEdit = (index) => {
    const note = notes[index];
    setTitle(note.title);
    setContent(note.content);
    setReminder(note.reminder);
    setFont(note.font);
    setEditIndex(index);
    setShowForm(true);
  };

  const togglePin = (index) => {
    const updated = [...notes];
    updated[index].pinned = !updated[index].pinned;
    setNotes(updated);
  };

  const filteredNotes = notes
    .filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.pinned - a.pinned);

  return (
    <div className="container">
      <h1>Quick Notes</h1>

      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />

      <button onClick={() => setShowForm(true)} className="new-note-button">
        <FaPlus /> New Note
      </button>

      {showForm && (
        <div className="note-form">
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="datetime-local"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          />
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
          <button onClick={handleSave}>{editIndex !== null ? 'Update Note' : 'Save Note'}</button>
        </div>
      )}

      <h2>📂 Notes</h2>
      <div className="notes-list">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className="note"
            style={{ fontFamily: note.font }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            {note.reminder && (
              <p className="reminder"><FaBell /> {note.reminder}</p>
            )}
            <div className="actions">
              <button onClick={() => handleEdit(index)}><FaEdit /> Edit</button>
              <button onClick={() => handleDelete(index)}><FaTrash /> Delete</button>
              <button onClick={() => togglePin(index)}>{note.pinned ? 'Unpin' : 'Pin'} <FaThumbtack /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
