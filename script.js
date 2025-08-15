const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Überprüfen des lokalen Speichers für den Dunkelmodus
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.innerText = 'Hellen Modus aktivieren';
}

// Funktion zum Umschalten des Dunkelmodus
const toggleDarkMode = () => {
    // Toggle der Klasse für Dunkelmodus
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        // Dunkelmodus aktivieren
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.innerText = 'Hellen Modus aktivieren';
    } else {
        // Dunkelmodus deaktivieren
        localStorage.removeItem('dark-mode'); // Fix: Use removeItem to clear dark mode
        toggleButton.innerText = 'Dunkelmodus aktivieren';
    }
};

// Event Listener für den Toggle-Button
toggleButton.addEventListener('click', toggleDarkMode);