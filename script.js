const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Überprüfen des lokalen Speichers für den Dunkelmodus
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.innerText = 'Hellen Modus aktivieren';
}

// Funktion zum Umschalten des Dunkelmodus
const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.innerText = 'Hellen Modus aktivieren';
    } else {
        localStorage.removeItem('dark-mode'); // Fix: Use removeItem to clear dark mode
        toggleButton.innerText = 'Dunkelmodus aktivieren';
    }
};

toggleButton.addEventListener('click', toggleDarkMode);