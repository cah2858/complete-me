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

  suggest(input = '') {
    // if root keys  includes the first letter
    if (Object.keys(this.root).includes(input[0])) {
      // use reduce to iterate down tree to get to the point of what we've inputed
      let path = input.split('').reduce( (key, letter) => {

        return key[letter];
      }, this.root);

      return this.returnWords(path, input);
    } else {
      return "No suggestions.";
    }
  }

  returnWords(path, input) {
    let results = [];

    Object.keys(path).forEach( key => {
      if (key !== 'end') {
        results.push(...this.returnWords(path[key], input + key));
      } else if (path.end) {
        results.push(input);
      }
    });
    return results;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
}