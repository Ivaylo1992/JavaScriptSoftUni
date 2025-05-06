function playingCards(face, suit) {
  const suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  const faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  if (!suits[suit]) {
    throw new Error('Error');
  }

  if (!faces.includes(face)) {
    throw new Error("Error");
  }

  return {
    face,
    suit: suits[suit],
    toString() {
      return `${this.face}${this.suit}`;
    },
  };
}

try {
    const card = playingCards("1", "S");
    console.log(card.toString());
  } catch (ex) {
    console.log(ex.name); // Outputs: Error
  }
  
