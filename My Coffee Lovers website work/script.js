// Example of JavaScript to add interactivity, like form validation or a menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
    });
});
