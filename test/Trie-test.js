import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should be a function', () => {
    expect(trie).to.exist;
  });

  it('should start with a length of zero', () => {
    expect(trie.totalWords).to.eq(0);
  })

  it('should default root to empty object', () => {
    expect(trie.root.children).to.deep.eq({});
  })

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.count()).to.eq(0);
    trie.insert('poop')
    expect(trie.count()).to.eq(1);
  })

  it('should insert word correctly when calling insert', () => {
    trie.insert('race');
    trie.insert('racecar');
    trie.insert('hello');
    trie.insert('help');

    console.log(JSON.stringify(trie, null, 4))
    expect(trie.root.letter).to.equal('h');
    expect(trie.root.letter).to.eq('h');
  })
});