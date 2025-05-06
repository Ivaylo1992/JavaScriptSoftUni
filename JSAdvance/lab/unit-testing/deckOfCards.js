function printDeckOfCards(cards) { 

    function createCard (face, suit){ 
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

        const result = []
        cards.forEach(card => {
            let [currentFace, currentSuit] = card.split('');
            if (card.slice(0, 2) === '10') {
                currentFace = card.slice(0, 2);
                currentSuit = card.slice(2, 3);
            }

            try {
                const newCard = createCard(currentFace, currentSuit).toString();
                result.push(newCard.toString())
            } catch (ex) {
                console.log(`Invalid card: ${card}`);   
            }
        });

        return result.join(' ')
    }

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
 

