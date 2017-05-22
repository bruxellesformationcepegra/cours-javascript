function getRandomNumber(max){
	return Math.floor(Math.random() * max);
}

function displayMagic8Answer(answer){
	document.getElementById("answer").innerHTML = answer;
}

function catClicked(cb){
	var cat = document.getElementById("cat");
	cat.addEventListener("click", cb);
}

function slide(id, position, duration){
	var cat = document.getElementById(id);
	Velocity(cat, {top: position}, duration * 1000);
}

function getYPosition(id){
	var cat = document.getElementById(id);
	return cat.offsetTop - cat.scrollTop + cat.clientTop;
}

function addMealToList(meal,i) {
  var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
	var el = document.createElement("div");
	el.className = "meal";
	var text = meal;
	if(i != undefined){
		text = days[i] + ": " + meal;
	}
  el.innerHTML = text;
  document.getElementById("container").appendChild(el);
}

function displayCat(){
	var cat = document.createElement("img");
	cat.setAttribute("src", "https://www.emojibase.com/resources/img/emojis/hangouts/1f431.png");
	document.getElementById("container").appendChild(cat);
}
