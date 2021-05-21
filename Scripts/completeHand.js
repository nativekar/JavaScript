/*
You're creating a game with some amusing mini-games, and you've decided to make a simple variant of the game Mahjong.
In this variant, players have a number of tiles, each marked 0-9. The tiles can be grouped into pairs or triples of the same tile. 
For example, if a player has "33344466", the player's hand has a triple of 3s, a triple of 4s, and a pair of 6s. 
Similarly, "55555777" has a triple of 5s, a pair of 5s, and a triple of 7s.

A "complete hand" is defined as a collection of tiles where all the tiles can be  grouped into any number of triples (zero or more) and exactly one pair, and each tile is used in exactly one triple or pair.
Write a function that takes a string representation of a collection of tiles in no particular order, and returns true or false depending on whether or not the collection represents a complete hand.


N - Number of tiles in the input string
tiles1 = "11133555"           # True.  111 33 555
tiles2 = "111333555"          # False. There are three triples, 111 333 555 but no pair.
tiles3 = "00000111"           # True.  000 00 111. Your pair and a triplet can be of the same value
                              #        There is also no limit to how many of each tile there is.
tiles4 = "13233121"           # True.  Tiles are not guaranteed to be in order
tiles5 = "11223344555"        # False. There cannot be more than one pair
tiles6 = "99999999"           # True.  You can have many of one tile
tiles7 = "999999999"          # False.
tiles8 = "9"                  # False.
tiles9 = "99"                 # True.
tiles10 = "000022"            # False.
tiles11 = "221"               # False. There cannot be any tiles left over.
tiles12 = "889"               # False. There cannot be any tiles left over.


completeHand(tiles1)  => True
completeHand(tiles2)  => False
completeHand(tiles3)  => True
completeHand(tiles4)  => True
completeHand(tiles5)  => False
completeHand(tiles6)  => True
completeHand(tiles7)  => False
completeHand(tiles8)  => False
completeHand(tiles9)  => True
completeHand(tiles10) => False
completeHand(tiles11) => False
completeHand(tiles12) => False
*/

const tiles1 = "1113355";

const completeHand = (tiles1) => {
  if (tiles1.length <= 1) return false;
  const charMap = {};
  for (let i = 0; i < tiles1.length; i++) {
    if (!charMap[tiles1[i]] && tiles1[i].trim() != "") {
      charMap[tiles1[i].toLowerCase()] = {
        count: 1,
      };
    } else if (charMap[tiles1[i]]) {
      charMap[tiles1[i].toLowerCase()].count += 1;
    }
  }
  console.log(charMap);
  return getCount(charMap);
};

const getCount = (charMap = {}) => {
  let isTriple = false,
    pairCount = 0;
  for (let i in charMap) {
    if (charMap[i].count == 3) {
      isTriple = true;
    } else if (charMap[i].count == 2 || charMap[i].count % 3 == 2) {
      isTriple = true;
      pairCount++;
    } else {
      pairCount = 0;
      isTriple = false;
      break;
    }
  }
  return isTriple && pairCount == 1;
};

console.log(completeHand(tiles1));
