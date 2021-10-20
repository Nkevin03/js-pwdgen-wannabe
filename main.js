// Variabili

const nome = prompt('come ti chiami?');
const cognome = prompt('quale é il tuo cognome?');
const colorepreferito = prompt('quale é il tuo colore preferito?');

// Stampa password

document.getElementById('password').innerHTML = nome + cognome + colorepreferito + 21;
