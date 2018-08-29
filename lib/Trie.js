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
    if (Object.keys(this.root).includes(input[0])) {
      let splitInput = input.split('');
      let path = splitInput.reduce( (key, letter) => {

        return key[letter];
      }, this.root);

      return this.returnWords(path, input);
    } else {
      return "no words";
    }
  }

  returnWords(obj, input) {
    let results = [];

    Object.keys(obj).forEach( key => {
      if (key !== 'end') {
        results.push(...this.returnWords(obj[key], input + key));
      } else if (obj.end) {
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