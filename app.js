var myTimer;
var timeLeft;
var themeChoice = [];
var turn = 0;


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
  document.getElementById("reponse1").innerHTML = themeChoice[0][1];
  document.getElementById("reponse2").innerHTML = themeChoice[0][2];
  document.getElementById("reponse3").innerHTML = themeChoice[0][3];
  document.getElementById("reponse4").innerHTML = themeChoice[0][4];
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