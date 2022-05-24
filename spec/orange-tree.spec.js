const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {

  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toBe(age)
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toBe(height)
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    test('should change the tree age', () => {
      expect(tree.age).toBe(age + 1)
    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      expect(tree.height).toBe(25)
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      expect(tree.age).toBe(6)
    });

  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {

    });

    test('returns false if tree is not old enough to bear fruit', () => {

    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {

    });

    test('should return true for a dead tree', () => {

    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {

    });

    test('should return false if the tree has no oranges', () => {

    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {

    });

    test('the returned orange should no longer be on the tree', () => {

    });

    test('should raise an error if the tree has no oranges', () => {

    });
  });
});
