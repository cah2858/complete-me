import { expect } from 'chai';
import Trie from '../lib/Trie';

describe('TRIE', () => {
  let prefixTrie;

  beforeEach(() => {
    prefixTrie = new Trie();
  });

  it('should be a function', () => {
    expect(prefixTrie).to.exist;
  });

  it('should start with a length of zero', () => {
    expect(prefixTrie.totalWords).to.equal(0);
  })

  it('should default root to null', () => {
    expect(prefixTrie.root).to.equal(null);
  })

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(prefixTrie.count()).to.equal(0);
    prefixTrie.insert('poop')
    expect(prefixTrie.count()).to.equal(1);
  })
});