const visit = document.querySelector('#visit');

window.addEventListener("load", () => {
    let oldDate = localStorage.getItem("lastDate"); 
    let currentDate = Date.now();
    if ( oldDate === null || oldDate === ""){
        oldDate = currentDate;
    }
    
    // let oldDate = 1467442058802;
    // let convertedDate = new Date(oldDate);
    let days = Math.trunc((currentDate - oldDate) / 86400000);
  
    
    localStorage.setItem("lastDate", currentDate);

    visit.innerHTML = days;
});