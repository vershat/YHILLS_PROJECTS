// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve form data
    var nameInput = document.querySelector('input[type="text"]');
    var emailInput = document.querySelector('input[type="email"]');
    var messageInput = document.querySelector('textarea');

    // Validate form data
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields');
        return;
    }

    // Send form data to server (you can customize this part with your own implementation)
    // For example, you can use AJAX or fetch API to send the form data to a server-side script

    // Display success message
    alert('Message sent successfully!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

// Add event listener to form submit button
var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
