if (typeof window !== "undefined") {
  let deck = [];
  let p1Deck = [];
  let p2Deck = [];
  
  const warContainer = document.getElementById("warContainer");
  const values = {1:"2",2:"3",3:"4",4:"5",5:"6",6:"7",7:"8",8:"9",9:"10",10:"J",11:"Q",12:"K",13:"A"};
  const inner = '<div class="card__inner ';
  const symbol = '<div class="card__symbol ';
  const symbolC = '<div class="card__symbol"></div>';
  const column = '<div class="card__column ';
  const huge = 'card--huge ';
  const aCenter = "center-symbol-align ";
  const jCenter = "center-symbol-justify ";
  const jSpcAround = "justify-space-around ";
  const c = "</div>";
  let innercard;
  let p1card,p2card;
  let p1WarCards = [];
  let p2WarCards = [];
  
  
  function otherCards(value,naipe) {
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
      case "J" : innercard = `${inner}"><img src="img/cards/${naipe}-${value}.png">${c}`;
      break;
      case "Q" : innercard = `${inner}"><img src="img/cards/${naipe}-${value}.png">${c}`;
      break;
      case "K" : innercard = `${inner}"><img src="img/cards/${naipe}-${value}.png">${c}`;
      break;
      default: innercard = `${inner}"><img src="img/cardback.png">${c}`;
    }
  }
  
  
  function createCard (naipeOf, valueOf, keyOf) {
    let card = {naipe : naipeOf , value : valueOf, key : keyOf};
    return card;
  }
  
  function drawDeck() {
    const naipes = ["club", "heart", "diamond","spade"]; 
    for(i=0; i < naipes.length; i++) {
      for(j=0; j < Object.keys(values).length; j++) {
        let newCard = createCard(naipes[i],Object.values(values)[j],Object.keys(values)[j])
        deck.push(newCard);
      } 
    }
    dealCards(deck);
  }
  drawDeck();
  
  function dealCards(deck) {
    
    // Shuffle 
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    // Distribute the cards
      p1Deck = deck.slice(0,(deck.length/2));
      p2Deck = deck.slice((deck.length/2), deck.length);

    }
  
  function generateCard(naipe,value){
    otherCards(value,naipe);
    let card =` 
    <section class="card card--${naipe}" value="${value}">
          ${innercard}
      </section>`;
  return card;
  }
  

  function play() {
     const element1 = document.getElementById("p1card");
     const element2 = document.getElementById("p2card");
      p1card = p1Deck.shift();
      p2card = p2Deck.shift();
     element1.innerHTML = generateCard(p1card.naipe, p1card.value);
     element2.innerHTML = generateCard(p2card.naipe, p2card.value);
     compare(p1card.key,p2card.key);

  }
  
  function compare(p1,p2) { 
    let player1 = document.getElementById("p1card");
    let player2 = document.getElementById("p2card");
    if (p1 > p2) { 
     p1Deck.push(p1card,p2card);
     player1.setAttribute('class','move-left');
     player2.setAttribute('class','move-left');
     player1.display
    } 
     else if (p1 < p2) {
     p2Deck.push(p1card,p2card);
     player1.setAttribute('class','move-right');
     player2.setAttribute('class','move-right');
     }
     else {
      war();
    }
  }

  function changeCardCounter(p1cards) {
    p1cards = p1Deck.length;
    p2cards = p2Deck.length;
    document.getElementById("scoreOne").innerHTML = `Cards Left: ${p1cards}`;
    document.getElementById("scoreTwo").innerHTML = `Cards Left: ${p2cards}`;
  }
  document.getElementById("button").addEventListener("click", changeCardCounter);

  
  
  function war() {
  
   p1WarCards = p1Deck.splice(0, 3);
   p2WarCards = p2Deck.splice(0, 3);
   //disable normal button
  //  let normalButton = document.querySelector(".btn-13")
  //  normalButton.disabled = true;

  

   let p1normal = document.getElementById("p1normal");
   let p2normal = document.getElementById("p2normal");
   let p1war = document.getElementById("p1war");
   let p2war = document.getElementById("p2war");
   let p1 = document.getElementById("warf1");
   let p2 = document.getElementById("warf2");
   p1normal.style.display = "none";
   p2normal.style.display = "none";
   p1war.style.display = "block";
   p2war.style.display = "block";
   containersForWar(war);

   
  let p1cardWar = p1Deck.shift();
  let p2cardWar = p2Deck.shift();
  p1.innerHTML = generateCard(p1cardWar.naipe, p1cardWar.value);
  p2.innerHTML = generateCard(p2cardWar.naipe, p2cardWar.value);

    if(p1cardWar.key > p2cardWar.key) {
      p1Deck.push(p1card,p2card,p1cardWar,p2cardWar);
      p1Deck = [...p1Deck,...p1WarCards,...p2WarCards];
      containersForWar(normal);
      p1normal.style.display = "block";
      p2normal.style.display = "block";
      p1war.style.display = "none";
      p2war.style.display = "none";
     
      return p1Deck;
    } else if (p2cardWar.key > p1cardWar.key) { 
      p2Deck.push(p1card,p2card,p1cardWar,p2cardWar);
      p2Deck = [...p2Deck,...p1WarCards,...p2WarCards];
      containersForWar(normal);
      p1normal.style.display = "block";
      p2normal.style.display = "block";
      p1war.style.display = "none";
      p2war.style.display = "none";
      return p2Deck;
    } else {war();}
  }



  function containersForWar(move){
    if(move === "war") {
      warContainer.innerHTML = "WARRRRRRRR";
      const warbacks = document.getElementsByClassName("warback");
      Array.from(warbacks).forEach(element => {element.innerHTML = generateCard(".",".")});
    }
    else {
      warContainer.innerHTML = "";
    }
    
   }

  }
  
  
  
  
  
  
  
  
  
  
  
  
  