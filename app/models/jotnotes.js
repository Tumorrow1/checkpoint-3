// NotesView.js
export const NotesView = {
    Notes(notes) {
        const notesContainer = document.getElementById('notes-container');
        notesContainer.innerHTML = ''; // Clear current list
        notes.forEach(note => {
            const noteElement = document.createElement(' ');
            noteElement.textContent = `${note.title} (${note.createdAt})`;
            noteElement.style.backgroundColor = note.color;
            noteElement.addEventListener('click', () => this.selectNote(note.id));
            notesContainer.appendChild(noteElement);
        });
        this.updateNoteCount(notes.length);
    },

    NoteDetails(note) {
        document.getElementById('edit-title').value = note.title;
        document.getElementById('edit-body').value = note.body;
        document.querySelector('.note-detail').classList.add('active');
    },

    updateNoteCount(count) {
        document.getElementById('note-count').textContent = `Total Notes: ${count}`;
    },

    clearInputs() {
        document.getElementById('note-title').value = '';
        document.getElementById('note-body').value = '';
        document.getElementById('note-color').value = 'lightblue';
    },

    selectNote(noteId) {
        const note = AppState.notes.find(n => n.id === noteId);
        if (note) {
            NotesController.setActiveNote(note);
        }
    }
};




















