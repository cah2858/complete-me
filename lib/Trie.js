import Node from './Node';

export default class prefixTrie {
  constructor () {
    this.totalWords = 0;
    this.root = null;
  }

  count() {
    return this.totalWords;
  }

  insert(word) {
    this.totalWords++;
  }
};