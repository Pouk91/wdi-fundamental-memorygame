var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
var cardOne = cards[0];
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === "2") {
  if (cardsInPlay[0] === cardsInPlay[2]) {}
alert("You found a match");
}  else {
alert("Sorry,try again.");
}
