var randomNumber1 = Math.floor(Math.random()*6)+1;
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 wins."
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins."
}
else{
  document.querySelector("h1").innerHTML="Draw, Roll dice again."
}
