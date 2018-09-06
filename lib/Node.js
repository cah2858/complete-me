class Node {
  constructor(letter) {
    this.letter = letter;
    this.wordEnding = null;
    this.children = {};
    this.selectionCount = 0;
  }

}

module.exports = Node;