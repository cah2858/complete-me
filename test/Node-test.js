import { expect } from 'chai';
import Node from '../lib/node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should default end to false', () => {
    expect(node.end).to.equal(false)
  })

  it('should default children to an empty object', () => {
    expect(node.children).to.deep.equal({});
  })
})