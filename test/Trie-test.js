import { expect } from 'chai';
import Trie from '../lib/Trie'

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  });

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.totalWords).to.eq(0);
    trie.insert('poop')
    expect(trie.totalWords).to.eq(1)
  });

  it('should insert a word by invoking the insert method', () => {
    trie.insert('hello');
    trie.insert('cool');
    trie.insert('poop');
    expect(trie.root).to.have.property('h') 
    expect(trie.root).to.have.property('c') 
    expect(trie.root).to.have.property('p') 
  });

  it('should suggest as array of words', () => {
    trie.insert('hello');
    trie.insert('help');
    trie.insert('poop');
    let response = trie.suggest('h');
    expect(response).to.deep.eq(['hello', 'help'])
  });
});