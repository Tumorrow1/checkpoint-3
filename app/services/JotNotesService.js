import { AppState } from "../AppState.js"
import { Note } from "../models/jotnotes.js"


class NotesService {

    createNotesService() {
        const note = new Note({})
        AppState.notes.push(note)


    }



}


export const notesService = new NotesService()