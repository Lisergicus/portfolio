var score = {
  userScore: 0,
  cpuScore: 0
}
var userPick;
var cpuPick;

var allOptions = [
   {
      name: "sasso",
      image: "assets/sasso.png"
   },
   {
      name: "carta",
      image: "assets/carta.png"
   },
   {
      name: "forbice",
      image: "assets/forbice.png"
   }
]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for(var i = 0; i < possibleUserPicks.length; i++){
  possibleUserPicks[i].addEventListener('click', onUserPick);
}

function onUserPick() {
   userPick = this.dataset.name;
   generateCpuPick();

   var cpuPickImage = "<img src='" + cpuPick.image + "' />";
   var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

   document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
   document.getElementById("result").innerHTML = checkWhoWon();

   document.getElementById("player-score").innerHTML = score.userScore;
   document.getElementById("cpu-score").innerHTML = score.cpuScore;
}

function generateCpuPick() {
   cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

generateCpuPick();

function checkWhoWon(){
  if(userPick == cpuPick.name){
    return "Hai Pareggiato";
  } else{
      if(userPick == "sasso") {

        if(cpuPick.name == "forbice"){
            score.userScore++;
            return "Hai Vinto";
         } else {
            score.cpuScore++;
            return "Hai Perso";
        }
      }

      if(userPick == "carta"){
        if(cpuPick.name == "sasso"){
            score.userScore++;
            return "Hai Vinto";        
         }
         else {
            score.cpuScore++;
            return "Hai Perso";
        }
      }

      if(userPick == "forbice"){
        if(cpuPick.name == "carta"){
            score.userScore++;
            return "Hai Vinto";          
         }
         else {
            score.cpuScore++;
            return "Hai Perso";
        }
      }        
   }
}