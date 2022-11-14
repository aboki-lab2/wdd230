const imagesToload = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshold: 1,
    rootMargin: "0px, 0px, 1000px, opx"
};
const loadImages=(images)=>{
    images.setAttribut("src", images-getAttribute("data-src"));
    images.onload=()=>{images.remove.Attribute("data-src");};};
    if("intersectionObserver" in window){
const imgObserver = new IntersectionObserver((items,observer) =>{
    items.forEach((item)=>{});
}, imgOptions);
imagesToload.forEach((img)=>{
    imgObserver.observe(img);});
}
    else{}

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

