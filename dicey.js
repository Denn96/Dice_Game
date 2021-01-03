var randomNumber1 = Math.floor(Math.random()*6 +1);

var randomNumber2 = Math.floor(Math.random()*6 +1);


function DICEY(){
var Dice1 = document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
var Dice2 = document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

 if(randomNumber1 / randomNumber2 === 1){
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");
document.querySelectorAll("h1")[0].textContent = ("It's a draw!");
}
// ------------ABOVE ARE THE IT'S DRAW CODE "GELIJK SPEL"------------------------

else if(randomNumber1 > randomNumber2){
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");
document.querySelectorAll("h1")[0].textContent = ("Player 1 Wins!");
}
else{
  document.querySelectorAll("h1")[0].textContent = ("Player 2 Wins!");
}

}
DICEY();
