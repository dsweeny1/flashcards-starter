const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    let turn, card, card2;

    beforeEach(() => {
      const card2 = new Card(
        2,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
      const turn = new Turn();
      const card = new Card();
    });
    
    it('should be a function', function(){
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should be able to return guess', function() {
        const turn = new Turn('user choice');
        expect(turn.userGuess).to.equal('user choice')
    })

    it('should be able to return card', function() {
        const turn = new Turn('card choice', card2);
        expect(turn.card).to.equal(card2)
    })

    it('should be able to evaluate guess', function() {
        const turn = new Turn(card2);
        expect(turn.userGuess).to.equal(card2)
        expect(turn.userGuess).to.equal(card2)
    })
})