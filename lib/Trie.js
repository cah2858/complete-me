import Node from './Node';

export default class Trie {
  constructor () {
    this.root = new Node ();
    this.totalWords = 0;
  }

  count() {
    return this.totalWords;
  }

  insert(word) {
    let currentNode = this.root;
    let letters = [...word];

    this.insertRecursive (letters, currentNode);
    this.totalWords++;
  }

  insertRecursive (letters, currentNode) {
    if (letters.length < 1) {
      currentNode.end = true;
      return;
    }

    let letter = letters.shift();

    if (!currentNode[letter]) {
      currentNode[letter] = new Node();
    }
    
    currentNode = currentNode[letter];

    return this.insertRecursive (letters, currentNode);
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }

  select(word) {
    let letters = [...word];
    let currNode = this.root;

    while(letters.length) {
      if(currNode[letters[0]]) {
        currNode = currNode[letters.shift()];      
      }
    currNode.selectionCount++;
    }
  }
}


