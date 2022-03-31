"use strict";

// projectName and projectEditLinks
const projectName = location.host.substring(0, location.host.indexOf("."));
const projectUrl = "https://" + projectName + ".glitch.me"
const editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=45-exercises.js";

// Dynamically generate the edit links
const editLinks = Array.from(document.querySelectorAll(".solutions-edit-link"));
editLinks.map(link => link.href = editSolutionsUrl);

// Dynamically generate the show home page links.
const showLinks = Array.from(document.querySelectorAll(".preview"));
showLinks.map(link => link.href = projectUrl);
