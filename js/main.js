var cards = ["queen","queen","king","king"];
var cardsInPlay = ["cards(0)", "cards(2)"];
var checkForMatch = function ()  {
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
  console.log("User flipped " + cards[cardId]);
}
var flipCard = function (cardId) {
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[2]) {}
  alert("You found a match");
  }  else {
  alert("Sorry,try again.");
  }
  console.log("User flipped " + cards[cardId]);
}
flipCard(0);
flipCard(2);
