// Get references to the DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Load the saved chapters from localStorage or start with empty array
let chaptersArray = getChapterList() || [];

// Display saved chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add new chapter on button click
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);             // show on screen
    chaptersArray.push(input.value);      // add to array
    setChapterList();                     // update localStorage
    input.value = '';                     // clear input
    input.focus();                        // focus input
  }
});

// Function to display a chapter with a delete button
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  
  li.append(deletebutton);
  list.append(li);
  
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Save array to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete a chapter from array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
