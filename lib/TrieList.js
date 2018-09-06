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

    let array = word.split('');
    let currNode = this.root;

    array.forEach(letter => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      } else {
        currNode.children[letter] = new Node(letter);
        currNode = currNode.children[letter];
      }
    });

    currNode.wordEnding = word;
  }

  suggest(str) {
    let array = [...str];
    let currNode = this.root;
    let falseReturn = false;
    let suggestions = [];

    array.forEach(letter => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      } else if (!currNode.children[letter]) {
        falseReturn = true;
      }
    });
    
    if (!falseReturn) {
      suggestions = this.pullSuggestions(currNode);
    }

    if (suggestions) {
      return suggestions;
    } else {
      return;
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

    return array;
  }

  select(word) {
    let letters = [...word];
    let currNode = this.root;

    while (letters.length) {
      if (currNode[letters[0]]) {
        currNode = currNode[letters.shift()];      
      }
      currNode.selectionCount++;
    }
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}

module.exports = Trie;