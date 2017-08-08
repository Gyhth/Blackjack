var BlackjackClass = function() {};

BlackjackClass.prototype = {
    playerHand: [],
    dealerHand: [],

    start: function() {
      for (var i = 0; i < 4; i++) {
        if (i % 2) {
          this.dealerHand.push(deck.deal());
        } else {
          this.playerHand.push(deck.deal());
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
      while (this.sum(this.dealerHand) < 17) {
        this.dealerHand.push(deck.deal());
      }
      if ((this.sum(this.dealerHand) < 22) && (this.sum(this.playerHand) < this.sum(this.dealerHand))) {
          state = 0;
        } else if (this.sum(this.playerHand) > 21) {
          state = 0;
        } else if (this.sum(this.playerHand) == 21 && this.playerHand.length == 1) {
          state = 1;
        } else {
          state = 2;
        }
        return state;
      },
    };

    var game = new BlackjackClass();
    game.start();
