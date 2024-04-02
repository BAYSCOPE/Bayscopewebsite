// scripts.js

// Simulated API request to fetch countries

var config = {
    url: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

window.addEventListener('DOMContentLoaded', () => {
    // Populate country dropdown using API
    fetch(config.url, {headers: {"X-CSCAPI-KEY": config.ckey}})
        .then(response => response.json())
        .then(data => {
            const countrySelect = document.getElementById('country');
            data.forEach(country => {
                const option = document.createElement('option');
                option.text = country.name;
                option.value = country.code;
                countrySelect.appendChild(option);
            });
        });

    // Show next set of fields after successful email input
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', () => {
        const nameField = document.getElementById('name');
        const industryField = document.getElementById('industry');
        const contactField = document.getElementById('contact');

        if (emailInput.validity.valid) {
            nameField.style.display = 'block';
            industryField.style.display = 'block';
            contactField.style.display = 'block';
            nameField.classList.add('slide-in');
            industryField.classList.add('slide-in');
            contactField.classList.add('slide-in');
        } else {
            nameField.style.display = 'none';
            industryField.style.display = 'none';
            contactField.style.display = 'none';
        }
    });

    // Add slide-in animation for address fields
    const addressField = document.getElementById('address');
    addressField.addEventListener('input', () => {
        const passwordField = document.getElementById('password');

        if (addressField.validity.valid) {
            passwordField.style.display = 'block';
            passwordField.classList.add('slide-in');
        } else {
            passwordField.style.display = 'none';
        }
    });
});
