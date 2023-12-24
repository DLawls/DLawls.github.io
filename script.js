function copyEmailToClipboard() {
    const email = 'davylawler@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        // Set the notification message
        document.getElementById('notification-message').textContent = "David's Email address copied to clipboard!";
        // Show the notification container
        document.getElementById('notification-container').style.display = 'block';
        // Hide the notification after 3 seconds
        setTimeout(() => {
            document.getElementById('notification-container').style.display = 'none';
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy email to clipboard:', err);
    });
}

