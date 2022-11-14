// select the elements to manipulate (output to)
const datefield = document.querySelector(".headerdate");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

const date1 = document.querySelector("#date1");

try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date1.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {
	alert("Error with FULL DATE code or your browser does not support Locale");
}

const copyYr = document.querySelector("#copyYr");
// Try to complete the method with options
try {
	const options = {
		year: "numeric"
	};
	copyYr.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {
	alert("Error with CURRENT YEAR code or your browser does not support Locale");
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */


  // initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();
