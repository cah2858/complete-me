const Node = require('../lib/Node');

module.exports = class Trie {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  count() {
    return this.wordCount;
  }

  insert(word) {
    this.wordCount++;

    if (!this.root) {
      this.root = new Node('Root');
    }

    let letters = [...word];
    let currNode = this.root;
 
    letters.forEach(letter => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      } else {
        currNode.children[letter] = new Node(letter);
        currNode = currNode.children[letter];
      }
    });

    currNode.wordEnding = word;
  }

  suggest(input) {
    let letters = [...input];
    let currNode = this.root;

    letters.forEach(child => {
      if (currNode[letters[0]]) {
        currNode = currNode[letters.shift();
      } else {
        return;
      }
      getSuggestions(currNode) 
        
    })

  }

  function getSuggestions(currNode, array = []) {

    Object.keys(currentNode).forEach(child => {
      if ()

      // check whether currNode is end of word
      // if so, push it into the array
      // then move into that node

    })
  }


  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}