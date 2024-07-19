async function fetchUserData() {
    // This line declares an asynchronous function named fetchUserData.
    // Async functions allow the use of await, making asynchronous code easier to write and read.
    
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        // This line declares a constant variable apiUrl and assigns it the URL of the API we'll fetch data from.
        // JSONPlaceholder is a free fake API for testing and prototyping.
    
        const dataContainer = document.getElementById('api-data');
        // This line finds the HTML element with the id 'api-data' and stores it in the constant dataContainer.
        // We'll use this element to display our fetched data.
    
        try {
        // This starts a try block. Code inside this block will be executed, and if an error occurs, it will be caught in the catch block.
    
            const response = await fetch(apiUrl);
            // This line uses the fetch function to make a GET request to the apiUrl.
            // The await keyword makes JavaScript wait until the fetch operation is complete before moving to the next line.
            // The result is stored in the response constant.
    
            const users = await response.json();
            // This line converts the response to JSON format.
            // Again, await is used to wait for this operation to complete.
            // The resulting array of user objects is stored in the users constant.
    
            dataContainer.innerHTML = '';
            // This line clears any existing content in the dataContainer element.
            // It removes the "Loading user data..." message that was initially there.
    
            const userList = document.createElement('ul');
            // This line creates a new unordered list (<ul>) element and stores it in the userList constant.
    
            users.forEach(user => {
            // This starts a forEach loop that iterates over each user object in the users array.
    
                const listItem = document.createElement('li');
                // For each user, this creates a new list item (<li>) element.
    
                listItem.textContent = user.name;
                // This sets the text content of the list item to the user's name.
    
                userList.appendChild(listItem);
                // This adds the list item as a child of the userList.
            });
    
            dataContainer.appendChild(userList);
            // After the loop, this adds the entire userList (containing all user names) to the dataContainer.
    
        } catch (error) {
        // If an error occurs in the try block, the code execution will jump to this catch block.
    
            console.error('Error fetching data:', error);
            // This logs the error to the console, which is useful for debugging.
    
            dataContainer.textContent = 'Failed to load user data.';
            // This sets the text of the dataContainer to an error message, informing the user that data loading failed.
        }
    }
    
    document.addEventListener('DOMContentLoaded', fetchUserData);
    // This adds an event listener to the document.
    // It waits for the DOM content to be fully loaded before calling the fetchUserData function.
    // This ensures that all HTML elements are available before we try to interact with them.