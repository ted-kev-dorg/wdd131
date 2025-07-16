// Set current year
let year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Set last modified date
let lastModified = document.lastModified;   
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector("#title"); 

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    title.classList.toggle("hidden");
});