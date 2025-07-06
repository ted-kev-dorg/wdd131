// Set current year
let year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Set last modified date
let lastModified = document.lastModified;   
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;