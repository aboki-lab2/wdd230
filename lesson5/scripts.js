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

const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);
        
        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });