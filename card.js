if (typeof window !== "undefined") {
  let p1card,p2card,p1WarCards,p2WarCards;
  let deck = [];
  let p1Deck = [];
  let p2Deck = [];
  let element = document.getElementById("warContainer");
  let values = {1:"2",2:"3",3:"4",4:"5",5:"6",6:"7",7:"8",8:"9",9:"10",10:"J",11:"Q",12:"K",13:"A"};
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
      let card =` 
      <section class="card card--${naipe}" value="${value}">
            ${innercard}
        </section>`;
    return card;
  }
  
  
  function drawDeck() {
    let naipes = ["club", "heart", "diamond","spade"]; 
    for(i=0; i < naipes.length; i++) {
      for(j=0; j < Object.keys(values).length; j++) {
        let newCard = createCard(naipes[i],Object.values(values)[j])
        deck.push(newCard);
      }
    }
    dealCards(deck);
  }
  drawDeck();
  
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
     p1card = element1.innerHTML = p1Deck.shift();
     p2card = element2.innerHTML = p2Deck.shift();
     let match1 = p1card.match(/value="([^"]+)"/);
     let match2 = p2card.match(/value="([^"]+)"/);
     let p1try = match1[1];
     let p2try = match2[1];
     compare(p1try,p2try);
  }
  
  function compare(p1,p2) {
    
    let p1key = Object.keys(values).indexOf(p1)
    let p2key = Object.keys(values).indexOf(p2);
  
    if (p1key > p2key) { 
     p1Deck.push(p1card,p2card);
     element.innerHTML = "";
  
    } else if (p1key < p2key) {
     p2Deck.push(p1card,p2card);
     element.innerHTML = "";
  
    } else {
      war();
    }
  }
  
  function war() {
   p1WarCards = p1Deck.splice(0, 3);
   p2WarCards = p2Deck.splice(0, 3);
   element.innerHTML = "WARRRRRRRR";
  }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  