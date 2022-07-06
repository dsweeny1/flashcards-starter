const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    let turn, card, card2;

    beforeEach(() => {
      card2 = new Card(
        2,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method"
      );
        turn = new Turn('iterator method', card2);
        card = new Card();
    });
    
    it('should be a function', function(){
     
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', function() {
       
        expect(turn).to.be.an.instanceof(Turn);
    })

    it('should be able to return guess', function() {
        
        expect(turn.userGuess).to.equal('iterator method')
    })

    it('should be able to return card', function() {
       
        expect(turn.card).to.equal(card2)
    })

    it('should be able to evaluate guess and give feedback', function() {
       
        expect(turn.evaluateGuess()).to.equal(false)
        expect(turn.giveFeedback()).to.equal('Nope!')
    })
})