document.getElementById('submitButton').addEventListener('click', function() {
    // Show popup
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
});

document.getElementById('closePopupButton').addEventListener('click', function() {
    // Hide popup
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});
