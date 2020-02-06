var myTimer;
var timeLeft;
var themeChoice = [];
var turn = 0;
var userChoice;
var correct;
var entry;
var score = 0; // nombre de bonne réponse
var tableScore = []; //table de scores des derniers joueurs


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

  document.getElementById("A").className = "repBtn-A";
  document.getElementById("B").className = "repBtn-B";
  document.getElementById("C").className = "repBtn-C";
  document.getElementById("D").className = "repBtn-D";
  turn = 0;

}
function questionSuivante(themeChoice){

  if(userChoice == correct){ 
  document.getElementById("question").innerHTML = themeChoice[turn][0];
  document.getElementById("repA").innerHTML = themeChoice[turn][1];
  document.getElementById("repB").innerHTML = themeChoice[turn][2];
  document.getElementById("repC").innerHTML = themeChoice[turn][3];
  document.getElementById("repD").innerHTML = themeChoice[turn][4];
  document.getElementById("A").className = "repBtn-A";
  document.getElementById("B").className = "repBtn-B";
  document.getElementById("C").className = "repBtn-C";
  document.getElementById("D").className = "repBtn-D";
}

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
    document.getElementById("img-principale").innerHTML = '<img src="https://media1.tenor.com/images/c999da20a6b3f9278cfc059c4313ed32/tenor.gif?itemid=14294403" alt="gif yes">';
    score++;
    tableScore.push([entry,score]);

  } else {
    document.getElementById("img-principale").innerHTML = '<img src="https://media3.giphy.com/media/2WxWfiavndgcM/giphy.gif" alt="gif yes">';
    document.getElementById("question").innerHTML = "Perdu !";
    document.getElementById("play-btn").innerHTML = "Rejouer !";
    tableScore.push([entry,score]);
    displayScore();

  }
    switch (correct) {
      case "A" :
        document.getElementById("A").className = "green";
        break;
      case "B" :
        document.getElementById("B").className = "green";
        break;
      case "C" :
        document.getElementById("C").className = "green";
        break;
      case "D" :
        document.getElementById("D").className = "green";
        break;


    
  }
  turn++;
}

function displayName() {
  entry = document.getElementById('data').value;
  document.getElementById("name").innerHTML=entry;
}

function insolite() {
  themeChoice = questionsInsolite;
}

function cultureG() {
  themeChoice = questionsCultureG;
}



function youLoose() {
  
  document.getElementById("question").innerHTML = "Perdu !";
  document.getElementById("repA").innerHTML = "";
  document.getElementById("repB").innerHTML = "";
  document.getElementById("repC").innerHTML = "";
  document.getElementById("repD").innerHTML = "";
  turn=0;
  
  
}


function timer() {
  var musique = new Audio("sounds/question.mp3");
  musique.play();
  timeLeft = 15;
  clearInterval(myTimer);
  myTimer = setInterval(function(){
    document.getElementById("time-btn").innerHTML = "<i class=\"fas fa-hourglass-half\"></i> " + timeLeft;
    timeLeft -= 1;

    if(timeLeft < 0 ){
      clearInterval(myTimer);
      document.getElementById("time-btn").innerHTML = "Fini !";
      musique.pause();
      start();
      
    }
  }, 1000);
}

function joker() {
  document.getElementById("joker-btn").innerHTML='<i class="fas fa-phone-slash"></i>';
}

function displayScore(){
      var html = '<div>';
      for (let result of tableScore){
        html += '<div>';
        html += result[0];
        html += ' / ';
        html += result[1];
        html += '</div>';
      }
      console.log(tableScore);
      document.getElementById("historique").innerHTML = html;
}

