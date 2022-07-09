// should create cards
// should put cards in deck
// should create new round using deck
// should invoke printMessage to display message in the CLI (what is CLI?)
// should invoke printQuestion to kick off helper function (given to us) that allow interaction via the CLI
// needs start() method
// start() method should be invoked to make the game playable in the console
// need to figure out where to invoke start() method

const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
    
    let deck = new Deck();
    let newGame = new Game();

    it('should instantiate a game', function() {
        
        expect(newGame).to.be.an.instanceOf(Game);
    })

    it('should create cards at start of game', function() {
        
        const newCards = newGame.createCards();

        expect(newCards).to.be.an('array');
    })

    it('should instantiate a deck', function() {

        const newDeck = newGame.createDeck();

        expect(newDeck).to.be.an.instanceOf(Deck);
    })

    it('should instantiate a new round', function() {

        expect(newGame.createRound()).to.be.an('object');
    })
});