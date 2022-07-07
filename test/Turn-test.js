const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    let turn, card, card3;

    beforeEach(() => {
      card3 = new Card(
        2,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
        turn = new Turn('mutator method', card3);
        card = new Card();
    });
    
    it('should be a function', function(){
       
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
        
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should be able to return guess', function() {
        
        expect(turn.userGuess).to.equal('mutator method')
    })

    it('should be able to return card', function() {
       
        expect(turn.card).to.equal(card3)
    })

    it('should be able to evaluate guess', function() {
        
        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn.giveFeedback()).to.equal('Correct!')
    })
})