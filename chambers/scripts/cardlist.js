const requestURL ='data.datajson';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies=jsonObject["companies"];
    companies.forEach(displayCompanies);
  });

  function displayCompanies(company){
    // Create elements to add to the document  
  let card=document.createElement("section");
  let portrait=document.createElement("img");
  let heading=document.createElement("h2");
  let paragraph=document.createElement("p");
  let paragraph2=document.createElement("p");
  let website=document.createElement("p");
  let paragraph4=document.createElement("p");

   heading.textContent=`${company.name}`;
   paragraph.textContent=`${company.location}`;
   paragraph2.textContent=`${company.telephone}`;
   website.innerHTML=`<a href="${company.website}" target="_blank">${company.website}</a>`;
   paragraph4.textContent=`${company.membership}`;

   // set the image attributes by using the setAttribute method for the src, alt, and load the attribute values. (Fill in the blank with the appropriate variable).
   portrait.setAttribute('src', company.image);
   portrait.setAttribute('alt', `Portait of ${company.name}`);
   portrait.setAttribute('loading','lazy');

   // Add/append the section(card) with the h2 element
   card.appendChild(portrait);
   card.appendChild(heading);
   card.appendChild(paragraph);
   card.appendChild(paragraph2);
   card.appendChild(website);
   card.appendChild(paragraph4);
   
   

   // Add/append the existing HTML div with the cards class with the section(card)
   document.querySelector('div.cards').appendChild(card);
}