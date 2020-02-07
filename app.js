var myTimer;
var timeLeft;
var themeChoice = [];
var turn = 0;
var userChoice;
var correct;
var entry = document.getElementById('data').value;
var tableScore = []; //table de scores des derniers joueurs
var jokerUsed = false;
const musiqueTime = new Audio("sounds/question.mp3");
const musiqueApplause = new Audio("sounds/applause.mp3");
var questionNb = 0;


var questionsInsolite = [];
questionsInsolite.push(["Quel est l'âge d'Arielle Dombasle ?", "113 ans", "Personne ne le sait", "66 ans", "La réponse D", "C"]);
questionsInsolite.push(["Quelle note ce projet métite-t-il ?", "20/20", "20/20", "20/20", "20/20","D"]);
questionsInsolite.push(["Quel est l'aliment le plus drôle ?", "La pasthèque", "la saucisson", "Le miel", "Le riz", "D"]);
questionsInsolite.push(["Qu’est-ce qui est jaune et qui attend ?", "Jonathan", "John attend !", "Une banane", "kim jong un", "A"]);
questionsInsolite.push(["Quel est le vrai prénom de Chuck Norris ?", "Chuck", "Norris", "Dieu", "Carlos", "D"]);

var questionsCultureG = [];
questionsCultureG.push(["Quelle invention est la plus ancienne ?", "La dynamite", "Les allumettes", "Le briquet", "L'ampoule électrique", "C"]);
questionsCultureG.push(["Quel est le plus puissant muscle ? ","La langue","Le fessier","Le dorsal","Hum hum ...","B"]);
questionsCultureG.push(["La taille du + grand homme du monde : ","2,32 mètres","2,76 mètres","3,02 mètres","2,48 mètres","B"]);
questionsCultureG.push(["Ce qui occupe 6 mois de notre vie : ","Attendre au feu rouge","Passer le balai","Bailler","Etre aux toilettes","A"]);
questionsCultureG.push(["Un gardien de nuit meurt le jour. Touche t-il une pension ? ","Oui" ,"S'il meurt de nuit uniquement","Pas de pension aux gardiens","Non, il est mort","D"]);

console.log(questionsInsolite);
console.log(questionsInsolite[0][1]);

function start(themeChoice) {
  document.getElementById("img-principale").innerHTML = '<img src="imgs/jpf.jpg" alt="gif too late">';

  turn = 0;
  answerEnabled();
  musiqueApplause.pause();

  document.getElementById("question").innerHTML = themeChoice[0][0];
  document.getElementById("repA").innerHTML = themeChoice[0][1];
  document.getElementById("repB").innerHTML = themeChoice[0][2];
  document.getElementById("repC").innerHTML = themeChoice[0][3];
  document.getElementById("repD").innerHTML = themeChoice[0][4];

  document.getElementById("A").className = "repBtn-A";
  document.getElementById("B").className = "repBtn-B";
  document.getElementById("C").className = "repBtn-C";
  document.getElementById("D").className = "repBtn-D";

  document.getElementById("joker-btn").innerHTML='<i class="fas fa-phone"></i>';
  jokerUsed = false;
}

function nextQuestion(themeChoice) {

  if (turn === 5) {
    musiqueApplause.play();
    document.getElementById("question").innerHTML = "Quizz terminé !";
    document.getElementById("repA").innerHTML = "";
    document.getElementById("repB").innerHTML = "";
    document.getElementById("repC").innerHTML = "";
    document.getElementById("repD").innerHTML = "";
    document.getElementById("A").className = "repBtn-A";
    document.getElementById("B").className = "repBtn-B";
    document.getElementById("C").className = "repBtn-C";
    document.getElementById("D").className = "repBtn-D";
    document.getElementById('culture-g-btn').onclick=function(){cultureG();};
    document.getElementById('insolite-btn').onclick=function(){insolite();};
    document.getElementById("insolite-btn").className = "theme";
    document.getElementById("culture-g-btn").className = "theme";
    document.getElementById("img-principale").innerHTML = '<img src="https://data.whicdn.com/images/326131140/original.gif" alt="gif bye">';
    answerDisabled();
    displayScore();
    questionNb ++;

  }

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
  questionNb++;
}

function joker() {
  stopTimer(myTimer);
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
  console.log("question " + questionNb + themeChoice[0][1]);

  document.getElementById("play-btn").innerHTML = "Rejouer !";

  if (themeChoice[1][1] === "20/20" && questionNb === 1) {
    document.getElementById("question").innerHTML = "Correct !";
    document.getElementById("img-principale").innerHTML = '<img src="https://media1.tenor.com/images/c999da20a6b3f9278cfc059c4313ed32/tenor.gif?itemid=14294403" alt="gif yes">';

    document.getElementById("A").className = "green";
    document.getElementById("B").className = "green";
    document.getElementById("C").className = "green";
    document.getElementById("D").className = "green";
    turn ++;
    argent();
    document.getElementById("nb-question").innerHTML = turn;
    } else {

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
      turn++;
      argent();
      document.getElementById("nb-question").innerHTML = turn;
    } else {
      document.getElementById("img-principale").innerHTML = '<img src="https://media3.giphy.com/media/2WxWfiavndgcM/giphy.gif" alt="gif lost">';
      document.getElementById("question").innerHTML = "Perdu !";
      document.getElementById('culture-g-btn').onclick = function () {cultureG();};
      document.getElementById('insolite-btn').onclick = function () {insolite();};
      questionNb =0;
      themeChoice = null;
      answerDisabled();


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
  }
  answerDisabled();
}

function displayName() {
  entry = document.getElementById('data').value;
  document.getElementById("name").innerHTML=entry;
  turn = 0;
}

function insolite() {
  themeChoice = questionsInsolite;
  document.getElementById("insolite-btn").className = "theme-selected";
  document.getElementById("culture-g-btn").className = "theme";
  document.getElementById('culture-g-btn').onclick=function(){clickDisabled();};
  answerDisabled();
  musiqueApplause.pause();
}

function cultureG() {
  themeChoice = questionsCultureG;
  document.getElementById("culture-g-btn").className = "theme-selected";
  document.getElementById("insolite-btn").className = "theme";
  document.getElementById('insolite-btn').onclick=function(){clickDisabled();};
  answerDisabled();
  musiqueApplause.pause();
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
    if(timeLeft < 0 ){
      clearInterval(myTimer);
      document.getElementById("time-btn").innerHTML = "Fini !";
      document.getElementById("img-principale").innerHTML = '<img src="https://media0.giphy.com/media/lSnCC6CAMTRZRULBp0/giphy.gif" alt="gif too late">';
      document.getElementById("question").innerHTML = "Perdu !";
      document.getElementById('culture-g-btn').onclick=function(){cultureG();};
      document.getElementById('insolite-btn').onclick=function(){insolite();};
      document.getElementById("insolite-btn").className = "theme";
      document.getElementById("culture-g-btn").className = "theme";
      turn=0;
      themeChoice = null;
    }
  }, 1000);
}

function stopTimer(timer) {
  clearInterval(timer);
  document.getElementById("time-btn").innerHTML = "<i class=\"fas fa-hourglass-half\"></i> " + "15";
  musiqueTime.pause();
}

function displayScore() {
  tableScore.sort(function(a, b) {
    if (a[1] == b[1]) {
      return 0;
    }
    else {
      return (a[1] > b[1]) ? -1 : 1;
    }
  });
  var html = '<div>';
  for (let result of tableScore) {
    html += '<div class="scoreDisplay">';
    html += result[0];
    html += ' / ';
    html += result[1];
    html += '</div>';
  }
  console.log(turn);
  document.getElementById("historique").innerHTML = html;

}

function argent() {
  let i;
  let argentRecolte = 0;
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
