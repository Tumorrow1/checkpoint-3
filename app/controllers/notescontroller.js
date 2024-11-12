// NotesController.js
// @ts-ignore
import { AppState } from '../AppState.js';
import { Note } from '../models/jotnotes.js';
import { notesService } from '../services/JotNotesService.js';

//  controler notes!
export class NotesController {

    constructor() {
        console.log("is it working");

    }

    // Note() {
    //     // enter and get notes from AppState
    //     this.Note();

    //     // event listeners to buttons
    //     document.getElementById('create-note-btn').addEventListener('click', () => this.createNote());
    //     document.getElementById('save-note-btn').addEventListener('click', () => this.saveNote());
    //     document.getElementById('delete-note-btn').addEventListener('click', () => this.deleteNote());
    // }

    // Notes() {
    //     // NotesView.Notes(AppState.notes);
    // }

    createNote() {
        event.preventDefault() // stops the page from reloading
        // @ts-ignore
        const title = document.getElementById('title').value;
        // @ts-ignore
        const color = document.getElementById('color').value;

        console.log(title, color);
        notesService
        // lets take this form data and turn it into a note.

        // SHOULD NOT STAY HERE
        //    v address        v the actual house   v raw materials
        const note = new Note({ title, color })
        console.log(note);
        AppState.notes.push(note)




    }

    // saveNote() {
    //     event.preventDefault()
    //     console.log();

    //     const body = document.getElementById('body').body;

    //     if (this.NoteId) {
    //         AppState.updateNote(this.activeNoteId, body);
    //         NotesView.clearInputs();
    //         this.Notes();
    //     }
    // }

    // deleteNote() {
    //     if (confirm('Are you sure you want to delete this note?') == this.activeNoteId) {
    //         AppState.deleteNote(this.activeNoteId);
    //         NotesView.clearInputs();
    //         this.Notes();
    //     }
    // }

    // setActiveNote(note) {
    //     this.activeNoteId = note.id;
    //     NotesView.NoteDetails(note);
    // }
};
