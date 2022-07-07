const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
    constructor(guess, card) {
        this.userGuess = guess;
        this.card = card;
    }
    returnGuess() {
        return this.userGuess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        if (this.userGuess === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    }
    giveFeedback() {
        if (this.userGuess === this.card.correctAnswer) {
            return 'Correct!'
        } else {
            return 'Nope!'
        }
    }
}

module.exports = Turn;