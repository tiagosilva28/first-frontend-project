if (typeof window !== "undefined") {
let deck = [];
let p1Deck = [];
let p2Deck = [];
let innercard;
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
    case "J" : innercard = `${inner}"><img src="img/cardback.png">${c}`;
    break;
    case "Q" : innercard = `${inner}"><img src="img/cardback.png">${c}`;
    break;
    case "K" : innercard = `${inner}"><img src="img/cardback.png">${c}`;
    break;
    default: innercard = undefined;
  }
}


function createCard (naipe, value) {
  otherCards(value)
    // const element = document.getElementById("p2card");
    let card =` 
    <section class="card card--${naipe}" value="${value}">
          ${innercard}
      </section>`;
  //  element.innerHTML = card;
  return card;
   
}
// createCard("club","A")


function drawDeck() {
  // let element = document.getElementById("p2card");
  let naipes = ["club", "heart", "diamond","spade"];
  let values = {1:"2",2:"3",3:"4",4:"5",5:"6",6:"7",7:"8",8:"9",9:"10",10:"J",11:"Q",12:"K",13:"A"};
  for(i=0; i < naipes.length; i++) {
    for(j=0; j < Object.keys(values).length; j++) {
      let newCard = createCard(naipes[i],Object.values(values)[j])
      //  element.innerHTML += newCard;
      // console.log(newCard);
      deck.push(newCard);
    }
  }
  dealCards(deck);

}
drawDeck();
console.log(p1Deck);
console.log(p2Deck);

// function shuffle() {
// let shuffledArray = deck.sort((a, b) => 0.5 - Math.random());
// for(i=0; i < shuffledArray.length; i++) {
//   let element = document.getElementById("p2card");
//   element.innerHTML += shuffledArray[i];
// }
// return shuffledArray;
// }
// shuffle();



function dealCards(deck) {
  
  // Shuffle the deck using the Fisher-Yates shuffle algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  
  // Distribute the cards evenly between the two players
  for (let i = 0; i < deck.length; i++) {
    if (i % 2 === 0) {
      p1Deck.push(deck[i]);
    } else {
      p2Deck.push(deck[i]);
    }
  }
  
  // Return an object containing each player's deck
  return {
    player1: p1Deck,
    player2: p2Deck
  };
}

function play() {
   let element1 = document.getElementById("p1card");
   let element2 = document.getElementById("p2card");
   p1 = element1.innerHTML = p1Deck.pop();
   p2 = element2.innerHTML = p2Deck.pop();
   war(p1,p2);
}

function war(p1,p2) {
let value = p1.slice(p1.indexOf('value="') + 1);
console.log(value);
let value2 = p2.slice(p1.indexOf('value="') + 1);
console.log(value2);
}
war(p1,p2);




}












