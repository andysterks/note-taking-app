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

  const noteHeader = document.createElement('div');
  noteHeader.classList.add('note-header');

  const noteTitle = document.createElement('p');
  noteTitle.classList.add('note-title');
  noteTitle.textContent = new Date().toLocaleString();
  noteHeader.appendChild(noteTitle);

  note.appendChild(noteHeader);

  const noteDeleteButton = document.createElement('p');
  noteDeleteButton.classList.add('note-delete-button');
  noteDeleteButton.textContent = 'X';
  noteDeleteButton.addEventListener('click', e => {
    note.parentElement.removeChild(note);
  });
  noteHeader.appendChild(noteDeleteButton);

  const noteText = document.createElement('p');
  noteText.classList.add('note-text');
  const noteTextArea = document.getElementById('note-textarea');
  noteText.textContent = noteTextArea.value;
  note.appendChild(noteText);

  document.querySelector('#notes-list').appendChild(note);

  noteTextArea.value = '';
  noteTextArea.focus();
}