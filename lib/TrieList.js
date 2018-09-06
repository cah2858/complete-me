const Node = require('../lib/Node');

class Trie {
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

  suggest(word) {
    let letters = [...word];
    let currNode = this.root;
    let noSuggestions = false;
    let suggestions = [];

    letters.forEach(letter => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      } else {
        noSuggestions = true;
      }
    });
    
    if (!noSuggestions) {
      suggestions = this.pullSuggestions(currNode);
    }

    if (suggestions) {
      return suggestions;
    } 
  }
  

  pullSuggestions(currNode, array = []) {
    Object.keys(currNode.children).forEach(child => {
      if (currNode.children[child]) {
        this.pullSuggestions(currNode.children[child], array);
      }
    });

    if (currNode.wordEnding !== null) {
      array.push(currNode.wordEnding);
    }

    if (array) {
      return array;
  }
}

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}

module.exports = Trie;