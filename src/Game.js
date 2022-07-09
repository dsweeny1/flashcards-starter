const { createPromptModule } = require('inquirer');
const Card = require('./Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');

class Game {
  constructor() {
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards() {
    const card = new Card(prototypeQuestions);
    const cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    this.cards = cards;
    return cards
  }

  createDeck() {
    const deck = new Deck(this.createCards());
    return deck
  }

  createRound() {
    const round = new Round(this.createDeck());
    return round;
  }

  start() {
    this.printMessage(this.createDeck(), this.createRound());
    this.printQuestion(this.createRound());
    this.createRound()
  }           
}

module.exports = Game;