export default class Node {
  constructor (letter) {
    this.letter = letter;
    this.end = false; 
    this.children = {};
  }
};

