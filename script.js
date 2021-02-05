var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item2 = document.querySelectorAll("li");
var delBtn = document.querySelector("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	ul.appendChild(btn);
	btn.name=input.value;
	input.value = "";
}

function deleteListElement(event){
	var btn = event.target;
	if (btn.tagName==="BUTTON") {
		var test = ul.getElementsByTagName('li');
		for (item of test){			
			if (item.innerText==btn.name) {
				item.remove();
				btn.remove();
			}
		}			
	}
	
}

function done(event){
	var target = event.target || event.srcElement;
	if (target.tagName==="LI") {
		target.classList.toggle('done');
		console.log(target.innerText);
	}

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

ul.addEventListener("click", done);

ul.addEventListener("click", deleteListElement);

input.addEventListener("keypress", addListAfterKeypress);