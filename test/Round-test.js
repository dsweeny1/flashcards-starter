const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
    let deck;
    let turn;
    let card1;
    let card2;
    let card3;
    let card4;
    let round;

    beforeEach(() => {
        card1 = new Card(
          1,
          "What allows you to define a set of related information using key-value pairs?",
          ["object", "array", "function"],
          "object"
        );
        card2 = new Card(
            2,
            "What is a comma-separated list of related values?",
            ["array", "object", "function"],
            "array"
          );
          card3 = new Card(
            3,
            "What type of prototype method directly modifies the existing array?",
            ["mutator method", "accessor method", "iteration method"],
            "mutator method"
          );
          card4 = new Card(
            4,
            "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
            ["mutator method", "accessor method", "iteration method"],
            "accessor method"
          );
          deck = new Deck([card1, card2, card3, card4]);
          round = new Round(deck);
      });

      it('should be a function', function(){

        expect(Round).to.be.a('function');
    })

    it('should be an instance of Round', function() {

        expect(round).to.be.an.instanceof(Round);
    })

    it("should make the first card in deck the current card", () => {
        expect(round.returnCurrentCard()).to.equal(card1);
      });

      it('should return the current card', function() {

        const currentCard = round.returnCurrentCard()

        expect(currentCard).to.equal(card1)
      })

      it('should have a method for the player to take a turn', function() {

        round.takeTurn();

        expect(round.turns).to.equal(1);
      });

      it('should increase the turns by 1 each turn', function() {
        
        round.takeTurn();
        round.takeTurn();
        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(4);
      })

      it("should be able to evaluate if the player's guess is correct or incorrect", function() {

        expect(round.takeTurn('object')).to.equal('Correct!');
        expect(round.takeTurn('guess')).to.equal('Nope!');
      })

      it('should return feedback', function() {

        const feedback = round.takeTurn();

        expect(feedback).to.be.a('string');
      })

      it('should return the percent correct to the player', function() {

        round.takeTurn('object');
        round.takeTurn('guess');
        const correctPercent = round.calculatePercentCorrect();

        expect(correctPercent).to.equal(50);
      });

      it('should tell the user of their correct answer percentage', function() {

        round.takeTurn('object');
        round.takeTurn('guess');

        expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
      })
    
});