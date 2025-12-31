// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Optional: persist preference to localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
    
    // Load saved preference on page load
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

        const toggleButton = document.getElementById('dark-mode-toggle');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
      document.getElementById('submit-btn').addEventListener('click', function() {
            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'Guest';
            const emailInput = document.getElementById('email');
            const email = emailInput ? emailInput.value : 'Your Email';
            alert(`Thank you for your message, ${name}! We will get back to you soon at ${email}.`);
        });