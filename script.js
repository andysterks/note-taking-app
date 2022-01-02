document.addEventListener('keydown', e => {
  if (e.shiftKey) {
    if (e.key === 'Enter') {
      addNewNote();
    }
  }
});

const createNoteButton = document.getElementById('create-note-button');
createNoteButton.addEventListener('click', e => {
  addNewNote();
});

function addNewNote() {
  const emptyNote = document.querySelector("#empty-note");
  if (emptyNote) {
    emptyNote.parentElement.removeChild(emptyNote);
  }

  const note = document.createElement('div');
  note.classList.add('note');

  const noteTitle = document.createElement('h3');
  noteTitle.textContent = new Date().toLocaleString();
  note.appendChild(noteTitle);

  const noteText = document.createElement('p');
  const noteTextArea = document.getElementById('note-textarea');
  noteText.textContent = noteTextArea.value;
  note.appendChild(noteText);

  document.querySelector('#notes-list').appendChild(note);

  noteTextArea.value = '';
  noteTextArea.focus();
}