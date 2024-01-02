const rankingList = document.getElementById('ranking');
const loadMoreButton = document.getElementById('loadMore');
const addPersonForm = document.getElementById('addPersonForm');
const personsList = document.getElementById('persons');

// Dummy-Daten für das Ranking
const ranking = [
  { id: 1, name: 'Person 1', votes: 0 },
  { id: 2, name: 'Person 2', votes: 0 },
  { id: 3, name: 'Person 3', votes: 0 },
];

// Dummy-Daten für die Admin-Seite
const persons = [
  { id: 1, name: 'Person 1' },
  { id: 2, name: 'Person 2' },
  { id: 3, name: 'Person 3' },
];

// Funktion zum rendern der Personen im Ranking
function renderRanking() {
  ranking.forEach(person => {
    const personElement = document.createElement('div');
    personElement.className = 'person';
    personElement.innerHTML = `
      <span class="name">${person.name}</span>
      <button class="up">▲</button>
      <span class="votes">${person.votes}</span>
      <button class="down">▼</button>
    `;
    rankingList.appendChild(personElement);
  });
}

// Funktion zum rendern der Personen in der Admin-Seite
function renderPersons() {
  persons.forEach(person => {
    const personElement = document.createElement('div');
    personElement.className = 'person';
    personElement.innerHTML = `<span class="name">${person.name}</span>`;
    personsList.appendChild(personElement);
  });
}

// Funktion zum hinzufügen einer neuen Person
function addPerson(name) {
  const newPerson = { id:
