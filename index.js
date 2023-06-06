var diceNum1 = Math.floor((Math.random()*6)+1);
if (diceNum1 === 1){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
}else if(diceNum1 === 2){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
}else if (diceNum1 === 3){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
}
else if(diceNum1 === 4){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
}else if(diceNum1 === 5){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
}else{
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}


var diceNum2 = Math.floor((Math.random()*6)+1);
if (diceNum2 === 1){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}else if(diceNum2 === 2){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}else if (diceNum2 === 3){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}
else if(diceNum2 === 4){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}else if(diceNum2 === 5){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}else{
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}

if (diceNum1 === diceNum2){
    document.querySelector("h2").classList.add("won");
    document.querySelector("h2").innerHTML = "You Won";
}else{
    document.querySelector("h2").classList.add("loose");
    document.querySelector("h2").innerHTML = "You Loose";
}