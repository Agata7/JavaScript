
const cardColors = [ "yellow", "yellow", "red", "red", "blue", "blue","green", "green"];
 
let choices = [...document.querySelectorAll(".memo")];

let activeCard = "";
const activeCards = []; // tablica,czy dwa divy są takie same

const gamePairs = choices.length/2;
let gameResult = 0;

const clickCard = function() {
    activeCard = this;
    if(activeCard == activeCards[0]) return; // nie można kliknąć dwa razy w tę samą kartę
    activeCard.classList.remove("hidden");
    if(activeCards.length === 0) {
        activeCards[0] = activeCard;
        return;
    }
    else {
      choices.forEach(function(choice){
          choice.removeEventListener('click', clickCard)
      }) 
    activeCards[1] = activeCard;
    console.log(activeCards)
    setTimeout(function(){
     if (activeCards[0].className === activeCards[1].className){
         console.log("wygrana")
         choices = choices.filter(choice => !choice.classList.contains("off")); // nie można klikać w kartę, która jest biała, wygrana
        activeCards[0].classList.add("off");
        activeCards[1].classList.add("off");
    } else {
        activeCards[0].classList.add("hidden");
        activeCards[1].classList.add("hidden");
    console.log("przegrana")
}
  activeCard ="";
  activeCards.length = 0;
  choices.forEach(function(choice){
    choice.addEventListener('click', clickCard)})
}, 1000)
    }

};



const startChoice = function () {
    choices.forEach(function (choice) {
        const position = Math.floor(Math.random() * cardColors.length);
        choice.classList.add(cardColors[position]);
        cardColors.splice(position, 1);
    })

    setTimeout(function () {
        choices.forEach(function (choice) {
            choice.classList.add("hidden")
            choice.addEventListener("click", clickCard)
        })
    },2000)
}
startChoice()