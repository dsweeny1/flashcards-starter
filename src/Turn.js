const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turns {
    constructor(guess, card) {
        this.userGuess = guess;
        this.card = card;
    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        if (this.userGuess === this.card.answer) {
            return true
        } else {
            return false
        }
    }
    giveFeedback() {
        if (this.userGuess === this.card.answer) {
            return 'Correct!'
        } else {
            return 'Nope!'
        }
    }
}

module.exports = Turns;