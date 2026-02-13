// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle successful submission (e.g., show a success message)
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        });
    });
}

// Interactive features
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hover');
    });
});