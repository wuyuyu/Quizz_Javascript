var myTimer;
var timeLeft;
var themeChoice = [];
var turn = 0;
var userChoice;
var correct;


var questionsInsolite = [];
questionsInsolite.push(["Quel est l'âge d'Arielle Dombasle ?", "113 ans", "Personne ne le sait", "66 ans", "La réponse D", "C"]);
questionsInsolite.push(["question", "rep1", "test", "rep3", "test", "B"]);

var questionsCultureG = [];
questionsCultureG.push(["question culture ? ","Rep1","Rep2","Rep3","Rep4","A"]);
questionsCultureG.push(["question culture1 ","Rep1","Rep2","Rep3","Rep4","C"]);

console.log(questionsInsolite);
console.log(questionsInsolite[0][1]);

function start(themeChoice) {
  document.getElementById("question").innerHTML = themeChoice[0][0];
  document.getElementById("repA").innerHTML = themeChoice[0][1];
  document.getElementById("repB").innerHTML = themeChoice[0][2];
  document.getElementById("repC").innerHTML = themeChoice[0][3];
  document.getElementById("repD").innerHTML = themeChoice[0][4];
}

function clickChoiceA() {
  userChoice = "A";
}

function clickChoiceB() {
  userChoice = "B";
}

function clickChoiceC() {
  userChoice = "C";
}

function clickChoiceD() {
  userChoice = "D";
}

function answer(themeChoice) {
  correct = themeChoice[turn][5];
  console.log("user :" + userChoice);
  console.log("bonne rep " + correct);

  if (userChoice === correct) {
    document.getElementById("question").innerHTML = "Correct !";
  } else {
    document.getElementById("question").innerHTML = "Perdu !";
    document.getElementById("C").color = "green";
  }

  switch (correct) {
    case "A" :

      break;
    case "B" :

      break;
    case "C" :

      break;
    case "D" :

      break;
  }

  turn++;
}

function insolite() {
  themeChoice = questionsInsolite;
  console.log(themeChoice);
}

function cultureG() {
  themeChoice = questionsCultureG;
  console.log(themeChoice);

}

function timer() {
  timeLeft = 15;
  clearInterval(myTimer);
  myTimer = setInterval(function(){
    document.getElementById("time-btn").innerHTML = "<i class=\"fas fa-hourglass-half\"></i> " + timeLeft;
    timeLeft -= 1;

    if(timeLeft < 0 ){
      clearInterval(myTimer);
      document.getElementById("time-btn").innerHTML = "Fini !";
    }
  }, 1000);
}

function joker() {
  document.getElementById("joker-btn").innerHTML='<i class="fas fa-phone-slash"></i>';
}