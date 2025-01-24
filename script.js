const compliments = [
    "Khadijah, you are the most beautiful girl in the world.",
    "In my eyes, you shine as the most stunning girl.",
    "I truly enjoy every moment we spend talking Khadijah.",
    "You're not just beautiful on the outside; your soul is radiant.",
    "I miss you the moment our conversation ends.",
    "Khadijah, your kindness and warmth is rare.",
    "Every time I see you, my heart skips a beat.",
    "You are wonderful!!",
    "You are an annoying cow as well 🙄🙄🙄.",
    "and sour pickle as well 🙄🙄🙄.",
    "Moti Moti Moti 🙄🙄🙄."
];

const affirmations = [
    "You are capable of achieving great things!",
    "You radiate positivity and light.",
    "You are worthy of love and respect.",
    "You are stronger than you think.",
    "Every day is a fresh start.",
    "You have the power to create change.",
    "Your potential is limitless.",
    "You are loved and cherished.",
    "You bring joy to those around you."
];

let currentComplimentIndex = 0;
let currentAffirmationIndex = 0;

function changeCompliment() {
    const button = document.querySelector('.compliments .button');
    currentComplimentIndex = (currentComplimentIndex + 1) % compliments.length;
    button.innerText = compliments[currentComplimentIndex];
}

function changeAffirmation() {
    const button = document.querySelector('.affirmations .button');
    currentAffirmationIndex = (currentAffirmationIndex + 1) % affirmations.length;
    button.innerText = affirmations[currentAffirmationIndex];
}

function addNote() {
    const noteInput = document.getElementById('noteInput');
    const savedNotesContainer = document.getElementById('savedNotesContainer');
    const note = noteInput.value.trim();

    if (note) {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.textContent = note;
        savedNotesContainer.appendChild(noteElement);
        noteInput.value = ''; // Clear input
        saveNotes(); // Save notes to local storage
    }
}

function saveNotes() {
    const savedNotesContainer = document.getElementById('savedNotesContainer');
    const notes = Array.from(savedNotesContainer.children).map(note => note.textContent);
    localStorage.setItem('notes', JSON.stringify(notes)); // Save notes to local storage
}

function loadNotes() {
    const savedNotesContainer = document.getElementById('savedNotesContainer');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.textContent = note;
        savedNotesContainer.appendChild(noteElement);
    });
}

window.onload = loadNotes; // Load notes when the page is loaded
