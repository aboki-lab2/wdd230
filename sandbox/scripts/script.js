// select the elements to manipulate (output to)
const datefield = document.querySelector(".headerdate");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// get the current date using a date object
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

// increase the number of visits.
numVisits++ &times;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();
// -------------------hamburguer-----------------------------
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburguer")
x.onclick = toggleMenu;
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
window.onresize = () => {if (window.innerWidth > 750) mainnav.classList.remove('responsive')};

  // lets you display the elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// fetch the value stored  in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// With the if and else statements you will be able to ascertain if this is the first visit or display the total number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits&times;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

