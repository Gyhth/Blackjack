var BlackjackClass = function() {};

BlackjackClass.prototype = {
  playerHand: [
    []
  ],
  dealerHand: [],
  playerBet: 0,
  playerCash: 0,
  hand: 0,

  start: function() {
    this.hand = 0;
    for (var i = 0; i < 4; i++) {
      if (i % 2) {
        this.dealerHand.push(deck.deal());
      } else {
        this.playerHand[this.hand].push(deck.deal());
      }
    }
  },

  sum: function(hand) {
    var sum = 0;
    for (var i = 0; i < hand.length; i++) {
      sum += hand[i].value;
    }
    return sum;
  },

  stay: function() {
    var state = -1;
    if (this.hand == this.playerHand.length - 1) {
      while (this.sum(this.dealerHand) < 17) {
        if (notEnoughCards()) {
          deck.generate();
        }
        this.dealerHand.push(deck.deal());
      }
      for (var x = 0; x < this.playerHand[i].length; x++) {
        if ((this.sum(this.dealerHand) < 22) && (this.sum(this.playerHand[x]) < this.sum(this.dealerHand))) {
          state = 0;
        } else if (this.sum(this.playerHand[x]) > 21) {
          state = 0;
        } else if (this.sum(this.playerHand[x]) == this.sum(this.dealerHand)) {
          state = 1;
        } else if (this.sum(this.playerHand[x]) == 21 && this.playerHand[x].length == 2) {
          state = 2;
        } else {
          state = 3;
        }
        this.endRound(state);
      }
    } else {
      this.hand++;
    }
  },

  hit: function() {
    this.playerHand[this.hand].push(deck.deal());
    if (this.sum(this.playerHand[this.hand]) > 21) {
      this.stay();
    }
  },

  endRound: function(state) {
    if (state == -1) {
      throw new exception();
    } else if (state == 0) {
      this.playerBet = 0;
    } else if (state == 1) {
      this.playerCash += this.playerBet;
    } else if (state == 2) {
      this.playerCash += (this.playerBet * 3);
    } else if (state == 3) {
      this.playerCash += (this.playerBet * 2);
    }
    return 1;
  },

  notEnoughCards: function() {
    if (cardsLeft.length > 0) {
      return true;
    }
    return false;
  },

  split: function() {
    if ((this.playerHand[this.hand].length == 2) && (this.playerHand[this.hand][0].name == this.playerHand[this.hand][1].name)) {
      this.playerHand[this.playerHand.length - 1] = this.playerHand[this.hand].splice(0, 1);
      game.deal(this.playerHand[this.hand]);
      game.deal(this.playerHand[this.playerHand.length - 1]);
    }
  },
};

var game = new BlackjackClass();
game.start();
