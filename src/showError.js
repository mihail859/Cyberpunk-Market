export function showError(message) {
    const errorBox = document.getElementById('errorBox');
    const errorMessage = errorBox.querySelector('.msg');

    errorMessage.textContent = message;
    errorBox.classList.add('show');

    // Remove display: none; to show the error message
    errorBox.style.display = 'block';

    setTimeout(() => {
        // Add display: none; after 3 seconds to hide the error message
        errorBox.style.display = 'none';
    }, 3000);
}
