const results = document.getElementById("results");
const descriptions = document.getElementsByClassName("description");
const allParagraphs = document.getElementsByTagName("p");
const buttonByName = document.getElementsByName("myButton");
const firstParagraph = document.querySelector(".description");
const allDescriptions = document.querySelectorAll(".description");

results.innerHTML = [
	`Elements with class "description": ${descriptions.length}`,
	`All paragraph elements: ${allParagraphs.length}`,
	`Button with name "myButton": ${buttonByName.length}`,
	`First matching paragraph: ${firstParagraph?.textContent ?? "none"}`,
	`All matching descriptions: ${allDescriptions.length}`
].join("<br>");
