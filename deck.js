var DeckClass = function() {
  this.cardsLeft = new Array();
  this.generate();
};

var CardClass = function(value, suit, name) {
  this.value = value;
  this.suit = suit;
  this.name = name;
};

CardClass.prototype = {
  value: 0,
  suit: -1,
  name: -1,
  toString: function() {
    return this.name + " of " + this.suitToString(this.suit);
  },

  suitToString: function(suit) {
    switch (suit) {
      case 0:
        return "Hearts";
      case 1:
        return "Diamonds";
      case 2:
        return "Spades";
      case 3:
        return "Clubs";
    }
  },
};

DeckClass.prototype = {
  generate: function() {
    for (var i = 1; i <= 13; i++) {
      if (i == 1) name = "Ace";
      else if (i == 11) name = "Jack";
      else if (i == 12) name = "Queen";
      else if (i == 13) name = "King";
      else name = i;
      for (var x = 0; x <= 3; x++) {
        if (i > 10) {
          value = 10;
        } else {
          value = i;
        }
        card = new CardClass(value, x, name);
        this.cardsLeft.push(card);
      }
    }
    this.shuffle();
  },

  deal: function() {
    var card = this.cardsLeft[0];
    this.cardsLeft.splice(0, 1);
    return card;
  },

  shuffle: function() {
    for (var i = this.cardsLeft.length - 1; i > 0; i--) {
      var swapWithIndex = Math.floor(Math.random() * (i + 1));
      var temp = this.cardsLeft[i];
      this.cardsLeft[i] = this.cardsLeft[swapWithIndex];
      this.cardsLeft[swapWithIndex] = temp;
    }
  },
};

var deck = new DeckClass();
