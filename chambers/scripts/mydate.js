// -------------todays date - HEADER 08/11/2022-----------
// select the elements to manipulate (output to)
const datefieldUK = document.querySelector(".todaysdate"); // for european/family history format with day first. 

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`; 


// --------year-----------------
document.getElementById("year").innerHTML = new Date().getFullYear();


// ------------last modify------------------
let d= document.lastModified;
document.querySelector("#lastUpdate").innerHTML=d;
