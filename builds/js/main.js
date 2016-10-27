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

	var findId = document.getElementById('elements'),
	    findLiActive = findId.getElementsByClassName('active'),
	    findLi = findId.getElementsByTagName('li');
	

	function addClassActive () {
		if (findId.lastElementChild.classList.contains('active')) {
   			removeClassActive(); 
   			findId.firstElementChild.classList.add('active');
   		} else {
   			removeClassActive(); 
	    	child = child.nextElementSibling.classList.add('active');
   		}   
	}
		
    if (findLiActive.length !=0) {
    	for (var i = 0; findLi.length> i ; i++) {
		    if (findLi[i].classList.contains('active')) {
		        child = findLi[i];
	   		} 
   		} 
   		addClassActive();
    } else {
    	removeClassActive(); 
    	findId.firstElementChild.classList.add('active');
    } 

 }

function selectPrevious() {
	var findId = document.getElementById('elements'),
	    findLiActive = findId.getElementsByClassName('active'),
	    findLi = findId.getElementsByTagName('li');
	

	function addClassActive () {
		if (findId.firstElementChild.classList.contains('active')) {
   			removeClassActive(); 
   			findId.lastElementChild.classList.add('active');
   		} else {
   			removeClassActive(); 
	    	child = child.previousElementSibling.classList.add('active');
   		}   
	}
		
    if (findLiActive.length !=0) {
    	for (var i = 0; findLi.length> i ; i++) {
		    if (findLi[i].classList.contains('active')) {
		        child = findLi[i];
	   		} 
   		} 
   		addClassActive();
    } else {
    	removeClassActive(); 
    	findId.lastElementChild.classList.add('active');
    } 
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