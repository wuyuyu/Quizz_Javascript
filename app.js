var myTimer;
var timeLeft;

var questionsInsolite = [];
questionsInsolite.push("Quel est l'âge d'Arielle Dombasle ?", "113 ans", "Personne ne le sait", "66 ans", "La réponse D", 3);
questionsInsolite.push("test", "113 ans", "Personne ne le sait", "66 ans", "La réponse D", 3);
console.log(questionsInsolite);

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