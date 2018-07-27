var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var inPut = document.querySelector("input");
var total = document.querySelector("#totalpoints");
total.textContent = 
p1score = 0;
p2score = 0;
var gameover = false;
var winningscore = 5;


var resetbutton = document.getElementById("reset");

p1button.addEventListener("click",function(){
	if(!gameover){
	p1score++;
	if(winningscore === p1score){
		p1display.classList.add("winner");
		gameover = true;
	}
	p1display.textContent = p1score;
}
});

p2button.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(winningscore === p2score){
		p2display.classList.add("winner");
		gameover = true;
	}
	p2display.textContent = p2score;
}
});

resetbutton.addEventListener("click",function(){
	reSet();

});
function reSet(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover = false;
	total.textContent=5;
	inPut=0;
}

inPut.addEventListener("change",function(){
	total.textContent = this.value;
	winningscore = Number(this.value);
	reSet();
});