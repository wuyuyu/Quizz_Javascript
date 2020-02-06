var myTimer;
var timeLeft;
var themeChoice = [];
var turn = 0;
var userChoice;
var correct;
var entry = document.getElementById('data').value;
var tableScore = []; //table de scores des derniers joueurs
var argentRecolte = 0;
var jokerUsed = false;
const musiqueTime = new Audio("sounds/question.mp3");

var questionsInsolite = [];
questionsInsolite.push(["Quel est l'âge d'Arielle Dombasle ?", "113 ans", "Personne ne le sait", "66 ans", "La réponse D", "C"]);
questionsInsolite.push(["Quel est l'aliment le plus drôle ?", "La pasthèque", "la saucisson", "Le miel", "Le riz", "D"]);
questionsInsolite.push(["question", "rep1", "test", "rep3", "test", "C"]);
questionsInsolite.push(["question", "rtd", "fhgdft", "rep3", "test", "C"]);
questionsInsolite.push(["question", "rep1", "test", "rep3", "test", "C"]);
questionsInsolite.push(["questtryon", "rep1", "test", "rehdgf3", "test", "C"]);

var questionsCultureG = [];
questionsCultureG.push(["question culture ? ","Rep1","Rep2","Rep3","Rep4","A"]);
questionsCultureG.push(["question2 culture1 ","Rep1","Rep2","Rep3","Rep4","C"]);
questionsCultureG.push(["question culture1 ","Rep1","Rep2","Rep3","Rep4","C"]);
questionsCultureG.push(["question culture1 ","Rep1","Rep2","Rep3","Rep4","C"]);
questionsCultureG.push(["question culture1 ","Rep1","Rep2","Rep3","Rep4","C"]);
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

  document.getElementById("joker-btn").innerHTML='<i class="fas fa-phone"></i>';
  jokerUsed = false;
}

function nextQuestion(themeChoice) {
  turn++;

  document.getElementById("question").innerHTML = themeChoice[turn.valueOf()][0];
  document.getElementById("repA").innerHTML = themeChoice[turn.valueOf()][1];
  document.getElementById("repB").innerHTML = themeChoice[turn.valueOf()][2];
  document.getElementById("repC").innerHTML = themeChoice[turn.valueOf()][3];
  document.getElementById("repD").innerHTML = themeChoice[turn.valueOf()][4];

  document.getElementById("A").className = "repBtn-A";
  document.getElementById("B").className = "repBtn-B";
  document.getElementById("C").className = "repBtn-C";
  document.getElementById("D").className = "repBtn-D";

  answerEnabled();
}

function joker() {

  document.getElementById("joker-btn").innerHTML = '<i class="fas fa-phone-slash"></i>';
  document.getElementById("question").innerHTML = "Correct !";
  document.getElementById("img-principale").innerHTML = '<img src="https://media1.tenor.com/images/c999da20a6b3f9278cfc059c4313ed32/tenor.gif?itemid=14294403" alt="gif yes">';

  correct = themeChoice[turn][5];
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
  jokerUsed = true;
  turn++;
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

  document.getElementById("play-btn").innerHTML = "Rejouer !";

  if (userChoice === correct) {
    document.getElementById("question").innerHTML = "Correct !";
    document.getElementById("img-principale").innerHTML = '<img src="https://media1.tenor.com/images/c999da20a6b3f9278cfc059c4313ed32/tenor.gif?itemid=14294403" alt="gif yes">';

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
  } else {
    document.getElementById("img-principale").innerHTML = '<img src="https://media3.giphy.com/media/2WxWfiavndgcM/giphy.gif" alt="gif yes">';
    document.getElementById("question").innerHTML = "Perdu !";
    document.getElementById('culture-g-btn').onclick=function(){cultureG();};
    document.getElementById('insolite-btn').onclick=function(){insolite();};
    document.getElementById("insolite-btn").className = "theme";
    document.getElementById("culture-g-btn").className = "theme";
    turn=0;
    themeChoice = null;


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

    if (tableScore.length === 3) {
      tableScore.shift();
    }
    tableScore.push([entry, turn]);
    argent();
    displayScore();
    turn = 0;
  }
  answerDisabled();
  turn++;
}

function displayName() {
  entry = document.getElementById('data').value;
  document.getElementById("name").innerHTML=entry;
}

function insolite() {
  themeChoice = questionsInsolite;
  document.getElementById("insolite-btn").className = "theme-selected";
  document.getElementById('culture-g-btn').onclick=function(){clickDisabled();};
}

function cultureG() {
  themeChoice = questionsCultureG;
  document.getElementById("culture-g-btn").className = "theme-selected";
  document.getElementById('insolite-btn').onclick=function(){clickDisabled();};
}

function timer() {
  musiqueTime.play();
  timeLeft = 15;
  clearInterval(myTimer);
  myTimer = setInterval(function(){
    document.getElementById("time-btn").innerHTML = "<i class=\"fas fa-hourglass-half\"></i> " + timeLeft;
    timeLeft -= 1;

    if(timeLeft < 0 ){
      clearInterval(myTimer);
      document.getElementById("time-btn").innerHTML = "Fini !";
      musiqueTime.pause();
    }
  }, 1000);
}

function stopTimer(timer) {
  clearInterval(timer);
  document.getElementById("time-btn").innerHTML = "<i class=\"fas fa-hourglass-half\"></i> " + "15";
  musiqueTime.pause();
}

function displayScore() {
  var t1 = tableScore.sort((a, b) => b[1] - a[0]);
  var html = '<div>';
  for (let result of tableScore) {
    html += '<div class="scoreDisplay">';
    html += result[0];
    html += ' / ';
    html += result[1];
    html += '</div>';
  }
  console.log(turn);
  console.log("tir du score: " + t1);
  document.getElementById("historique").innerHTML = html;
  document.getElementById("meilleur").innerHTML = t1;

}

function argent() {
  let i;
  for (i = 0; i < turn; i++) {
    argentRecolte = (argentRecolte + (i + 1));
  }
  argentRecolte = argentRecolte * 100;
  document.getElementById("nb-argent").innerHTML = argentRecolte + " €";
  console.log("argent gagné: " + argentRecolte);
}

function clickDisabled() {

}

function answerDisabled() {
  document.getElementById('A').onclick=function(){clickDisabled();};
  document.getElementById('B').onclick=function(){clickDisabled();};
  document.getElementById('C').onclick=function(){clickDisabled();};
  document.getElementById('D').onclick=function(){clickDisabled();};
}

function answerEnabled() {
  document.getElementById('A').onclick=function(){clickChoiceA(); stopTimer(myTimer); answer(themeChoice);};
  document.getElementById('B').onclick=function(){clickChoiceB(); stopTimer(myTimer); answer(themeChoice);};
  document.getElementById('C').onclick=function(){clickChoiceC(); stopTimer(myTimer); answer(themeChoice);};
  document.getElementById('D').onclick=function(){clickChoiceD(); stopTimer(myTimer); answer(themeChoice);};
}