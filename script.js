// This event listener ensures that the script runs only after the entire HTML document has been loaded.
// It's important because it prevents errors that could occur if the script tries to interact with elements that haven't been created yet.
document.addEventListener('DOMContentLoaded', function() {

    // This line selects the form element with the id "registration-form" and stores it in the constant 'form'.
    // document.getElementById is a method that finds an HTML element by its id attribute.
    const form = document.getElementById('registration-form');

    // This line selects the div element with the id "form-feedback" and stores it in the constant 'feedbackDiv'.
    // This div will be used to display validation messages to the user.
    const feedbackDiv = document.getElementById('form-feedback');

    // This adds an event listener to the form that triggers when the form is submitted.
    // The 'submit' event occurs when the user tries to submit the form.
    form.addEventListener('submit', function(event) {
        
        // This line prevents the default form submission behavior.
        // It's crucial for client-side validation because it stops the form from being sent to the server before we can validate it.
        event.preventDefault();

        // These lines retrieve the values from the input fields and trim any whitespace from the beginning and end.
        // trim() is a string method that removes whitespace from both ends of a string.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // This variable will keep track of whether all validations pass.
        // We start by assuming the form is valid and will set it to false if any validation fails.
        let isValid = true;

        // This array will store any error messages we need to display to the user.
        const messages = [];

        // Username validation
        // We check if the username is less than 3 characters long.
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long");
        }

        // Email validation
        // We use the includes() method to check if the email contains both '@' and '.' characters.
        // This is a simple check and not foolproof, but it's a start for basic validation.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address");
        }

        // Password validation
        // We check if the password is at least 8 characters long.
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long");
        }

        // This line makes the feedback div visible.
        // We set the display style to 'block' to show the div, which was initially hidden in the CSS.
        feedbackDiv.style.display = 'block';

        // This if-else block determines what message to display based on whether the form is valid.
        if (isValid) {
            // If the form is valid, we display a success message and set the color to green.
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            // If the form is not valid, we join all error messages with line breaks and display them.
            // We use innerHTML here because we want to interpret the <br> tags as HTML.
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    });
});