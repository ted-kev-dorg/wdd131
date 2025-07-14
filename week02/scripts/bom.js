// Get references to the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the button
button.addEventListener('click', function () {
  // Only proceed if input is not empty
  if (input.value.trim() !== '') {
    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set content
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Append button to the li
    li.append(deleteButton);

    // Append li to the list
    list.append(li);

    // Add delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear the input and refocus
    input.value = '';
  }

  // Always refocus on the input
  input.focus();
});