const createNoteButton = document.getElementById('create-note-button');

createNoteButton.addEventListener('click', e => {
  const note = document.createElement('div');
  note.classList.add('note');

  const noteText = document.createElement('p');
  noteText.textContent = document.querySelector('#note-textarea').value;
  note.appendChild(noteText);

  document.querySelector('#notes-list').appendChild(note);
});