function selectFirst() {
	var findId = document.getElementById('elements'),
		firstChild = findId.firstElementChild;
	removeClassActive();
    firstChild.classList.add('active');
}

function selectLast() {
	var findId = document.getElementById('elements'),
		lastChild = findId.lastElementChild;
	removeClassActive();		
	lastChild.classList.add('active');
}

function removeClassActive() {
	var findId = document.getElementById('elements');
	for (var i = 0; i < findId.children.length; i++) {
  		findId.children[i].classList.remove('active'); 
	}
}

function selectNext() {
	var findId = document.getElementById('elements');
	var findLiActive = document.getElementsByClassName('active');
	var findLi = document.getElementsByTagName('li');	
 }

function selectPrevious() {
	alert('6576765');
}

function addElement(form) {
	var formValue = form.insert.value;
	if (formValue != 0) {
		var findId = document.getElementById('elements'),
		newItem = document.createElement('li');
		newItem.innerHTML = formValue;
		removeClassActive();
		findId.appendChild(newItem).classList.add('active');
	} else {
		alert("Введите значение");
	}
}

function removeElement() {
	var findId = document.getElementById('elements'),
		lastItem = findId.lastElementChild;
	if (lastItem != null) { 
        findId.removeChild(lastItem);
    } else {
    	alert("Удалять больше нечего. Сначала добавьте элементы")
    }		
}

function insertUp(form) {
	var formValue = form.insert.value;
	if (formValue != 0) {
	var findId = document.getElementById('elements'),	
		newItem = document.createElement('li'),
		newText = document.createTextNode(formValue);
	newItem.appendChild(newText);
	removeClassActive();
	findId.insertBefore(newItem, findId.firstElementChild).classList.add('active');
	} else {
		alert("Введите значение");
	}
}