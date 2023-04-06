if (typeof window !== "undefined") {

let innercard, valete, queen, king;
let inner = '<div class="card__inner ';
let symbol = '<div class="card__symbol ';
let symbolC = '<div class="card__symbol"></div>';
let column = '<div class="card__column ';
let huge = 'card--huge ';
let aCenter = "center-symbol-align ";
let jCenter = "center-symbol-justify ";
let jSpcAround = "justify-space-around ";
let c = "</div>";





function otherCards(value) {
  switch(value) {
    case "A": innercard = `${inner}${aCenter}${jCenter}">${column}">${symbol}${huge}">${c.repeat(3)}`;
    break;
    case "2": innercard = `${inner}${jCenter}">${column}">${symbolC}${column}">${symbolC}${c.repeat(3)}`;
    break;
    case "3": innercard = `${inner}${jCenter}">${column}">${symbolC.repeat(3)}${c.repeat(2)}`;
    break;
    case "4": innercard = `${inner}">${column}">${symbolC.repeat(2)}${c}${column}">${symbolC.repeat(2)}${c.repeat(2)}`;
    break;
    case "5": innercard = `${inner}">${column}">${symbolC.repeat(2)}${c}${column}${jCenter}">${symbolC}${c}${column}">${symbolC.repeat(2)}${c.repeat(2)}`;
    break;
    case "6": innercard = `${inner}">${column}">${symbolC.repeat(3)}${c}${column}">${symbolC.repeat(3)}${c.repeat(2)}`;
    break;
    case "7": innercard =`${inner}">${column}">${symbolC.repeat(3)}${c}${column}${jCenter}">${symbolC}${c}${column}">${symbolC.repeat(3)}${c.repeat(2)}`;
    break;
    case "8": innercard = `${inner}">${column}">${symbolC.repeat(3)}${c}${column}${aCenter}${jSpcAround}">${symbolC.repeat(2)}${c}${column}">${symbolC.repeat(3)}${c.repeat(2)}`;
    break;
    case "9": innercard = `${inner}">${column}">${symbolC.repeat(4)}${c}${column}${jCenter}">${symbolC}${c}${column}">${symbolC.repeat(4)}${c.repeat(2)}`;
    break;
    case "10": innercard = `${inner}">${column}">${symbolC.repeat(4)}${c}${column}${aCenter}${jSpcAround}">${symbolC.repeat(2)}${c}${column}">${symbolC.repeat(4)}${c.repeat(2)}`;
    break;
    case "J" : innercard = valete;
    break;
    case "Q" : innercard = queen;
    break;
    case "K" : innercard = king;
    break;
    default: innercard = undefined;
  }
}



function createCard (naipe, value) {
  otherCards(value)
    // const element = document.getElementById("p2card");
    let card =` 
    <section id="1" class="card card--${naipe}" value="${value}">
          ${innercard}
      </section>`;
  //  element.innerHTML = card;
  return card;
   
}
// createCard("club","A")

let deck = [];
function drawDeck() {
  // let element = document.getElementById("p2card");
  let naipes = ["club", "heart", "diamond","spade"];
  let values = {1:"2",2:"3",3:"4",4:"5",5:"6",6:"7",7:"8",8:"9",9:"10",10:"J",11:"Q",12:"K",13:"A"};
  for(i=0; i < naipes.length; i++) {
    for(j=0; j < Object.keys(values).length; j++) {
      let cardNova = createCard(naipes[i],Object.values(values)[j])
      //  element.innerHTML += cardNova;
      console.log(cardNova);
      deck.push(cardNova);
    }
  }
}

drawDeck();
let shuffledArray = deck.sort((a, b) => 0.5 - Math.random());
for(i=0; i < shuffledArray.length; i++) {
  let element = document.getElementById("p2card");
  element.innerHTML += shuffledArray[i];
}
  









}
