function divide(num1) {
  return num1 / 10;
  
}

function multiply(num1) {
	return num1 * 5;
}

function selector() {
	var entryNumber = document.getElementById("entryNumber").value;
	if (entryNumber >= 10000) {
		entryNumber = divide(entryNumber);
		console.log(entryNumber);
		win.innerHTML = entryNumber;
	} else  if (entryNumber < 10000) {
		entryNumber = multiply(entryNumber);
		console.log(entryNumber);
		win.innerHTML = entryNumber;
	} else if (isNaN(entryNumber)) {
        alert("Must insert a number!");
	}
    return entryNumber;
}

