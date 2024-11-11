// NotesController.js
import { AppState } from './AppState.js';
import { NotesView } from './NotesView.js';
//  controler notes!
export const NotesController = {
    activeNoteId: null,

    Note() {
        // enter and get notes from AppState
        this.Notes();

        // Bind event listeners to buttons
        document.getElementById('create-note-btn').addEventListener('click', () => this.createNote());
        document.getElementById('save-note-btn').addEventListener('click', () => this.saveNote());
        document.getElementById('delete-note-btn').addEventListener('click', () => this.deleteNote());
    },

    Notes() {
        NotesView.renderNotes(AppState.notes);
    },

    createNote() {
        const title = document.getElementById('note-title').value;
        const body = document.getElementById('note-body').value;
        const color = document.getElementById('note-color').value;

        if (title.length < 3 || title.length > 15) {
            alert('Title must be between 3 and 15 characters.');
            return;
        }

        const newNote = {
            id: Date.now().toString(), // Use timestamp as unique ID
            title,
            body,
            color,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString()
        };

        AppState.addNote(newNote);
        NotesView.clearInputs();
        this.renderNotes();
    },

    saveNote() {
        const body = document.getElementById('edit-body').value;

        if (this.activeNoteId) {
            AppState.updateNote(this.activeNoteId, body);
            NotesView.clearInputs();
            this.renderNotes();
        }
    },

    deleteNote() {
        if (confirm('Are you sure you want to delete this note?') && this.activeNoteId) {
            AppState.deleteNote(this.activeNoteId);
            NotesView.clearInputs();
            this.renderNotes();
        }
    },

    setActiveNote(note) {
        this.activeNoteId = note.id;
        NotesView.renderNoteDetails(note);
    }
};
