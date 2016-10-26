function selectFirst() {
	var findId = document.getElementById('elements'),
		firstChild = findId.firstElementChild;

	
	for (var i = 0; i < findId.children.length; i++) {
  		findId.children[i].classList.remove('active'); 
	}
	
    firstChild.classList.add('active');
}

function selectLast() {
	var findId = document.getElementById('elements'),
		lastChild = findId.lastElementChild;
		
	for (var i = 0; i < findId.children.length; i++) {
  		findId.children[i].classList.remove('active'); 
	}
		
	lastChild.classList.add('active');
}

function selectNext() {
	alert('jkjkj');
}

function selectPrevious() {
	alert('6576765');
}

function addElement() {
	alert('mnmnmn');
}

function removeElement() {
	alert('uyyyy');
}

function insertUp() {
	alert('xccc');
}