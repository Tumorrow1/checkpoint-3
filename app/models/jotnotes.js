// NotesView.js
// class means blue print 📘
export class Note {

    // 👷‍♂️the guy that actually builds it
    constructor(data) {
        // data is the actual supplies needed to build the thing 🪵
        // this.bathroom = data.toilet_and_seat

        this.title = data.title
        this.color = data.color
        this.body = data.body || ''
        this.createdDate = data.createdDate ? new Date(data.createdDate) : new Date()
        this.updatedDate = data.updatedDate ? new Date(data.updatedDate) : new Date()

    }



    // Notes(notes) {
    //     const notesContainer = document.getElementById('notes-container');
    //     notesContainer.innerHTML = ''; // Clear current list
    //     notes.forEach(note => {
    //         const noteElement = document.createElement(' ');
    //         noteElement.textContent = `${note.title} (${note.createdAt})`;
    //         noteElement.style.backgroundColor = note.color;
    //         noteElement.addEventListener('click', () => this.selectNote(note.id));
    //         notesContainer.appendChild(noteElement);
    //     });
    //     this.updateNoteCount(notes.length);
    // }

    // NoteDetails(note) {
    //     document.getElementById('edit-title').value = note.title;
    //     document.getElementById('edit-body').value = note.body;
    //     document.querySelector('.note-detail').classList.add(' ');
    // }

    // updateNoteCount(count) {
    //     document.getElementById('note-count').textContent = `Total Notes: ${count}`;
    // }

    // clearInputs() {
    //     document.getElementById('note-title').value = '';
    //     document.getElementById('note-body').value = '';
    //     document.getElementById('note-color').value = 'blue';
    // }

    // selectNote(noteId) {
    //     const note = AppState.notes.find(note => note.id === noteId);
    //     if (note) {
    //         NotesController.setActiveNote(note);
    //     }
    // }
};




















