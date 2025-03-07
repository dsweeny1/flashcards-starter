const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Deck', function() {
    let deck;
    let card1;
    let card2;
    let card3;
    let card4;

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
      });

    it('should be a function', function() {

        expect(Deck).to.be.a('function');
    })

    it('should be an instance of Deck', function() {

        expect(deck).to.be.an.instanceOf(Deck)
    })

    it('should count the cards in the deck', function() {

        expect(deck.countCards()).to.equal(4);
    })
})