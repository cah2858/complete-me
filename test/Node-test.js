import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('p');
  });

  it('should exist', () => {
    expect(node).to.exist;
  }) 

  it('should take a letter as an argument and assign the fist letter to the letter property of this obj', () => {
    expect(node.letter).to.equal('p');
  }) 

  it('should default end to false', () => {
    expect(node.end).to.equal(false);
  })

  it('should default children to an empty object', () => {
    expect(node.children).to.deep.equal({});
  }) 
})