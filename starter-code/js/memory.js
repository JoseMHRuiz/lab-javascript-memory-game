class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    cards = this.cards;
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
  checkIfPair(card1, card2) {
    this.pickedCards = [card1, card2]
    this.pairsClicked++
    // this.cards = card1
    // this.cards.name = card2
    // card1 === card2 ? this.pairsGuessed += 1 : false
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } return false

  }
  isFinished() {
    if (this.pairsGuessed < this.cards.length / 2) {
      return false
    } return true
  }
}

//  || this.pairsGuessed === 0