const OrangeTree = require('../orange-tree');
const Orange = require('../orange');

// Test-Driven Development
describe('OrangeTree', () => {
  let tree;
  let orange;

  beforeEach(() => {
    tree = new OrangeTree(3, 10);
    orange = new Orange();
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toEqual(3);
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toEqual(10);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    test('should change the tree age', () => {
      tree.passGrowingSeason();
      expect(tree.age).toEqual(4);
    });

    test('should make the tree grow', () => {
      if (tree.height >= 0 && tree.height <= 22.5) {
        tree.passGrowingSeason();
        expect(tree.height).toEqual(12.5);
      }
      // This should be more explicit. How much should the tree grow?
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      tree.oranges = [];
      tree.age = 7;
      if (tree.age >= 6) {
        tree.passGrowingSeason();
        const { length } = tree.oranges;
        expect(length).toBeGreaterThanOrEqual(100);
        expect(length).toBeLessThanOrEqual(300);
      }
    });
  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      tree.age = 6;
      const mature = tree.isMature();
      expect(mature).toBeTruthy();
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      const mature = tree.isMature();
      expect(mature).toBeFalsy();
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      const dead = tree.isDead();
      expect(dead).toBeFalsy();
    });

    test('should return true for a dead tree', () => {
      tree.age = 100;
      const dead = tree.isDead();
      expect(dead).toBeTruthy();
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      tree.oranges = [orange];
      const property = tree.hasOranges();
      expect(property).toBeTruthy();
    });

    test('should return false if the tree has no oranges', () => {
      tree.oranges = [];
      const property = tree.hasOranges();
      expect(property).toBeFalsy();
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      tree.oranges = [orange];
      const property = tree.pickAnOrange();
      expect(property).toEqual(orange);
    });

    test('the returned orange should no longer be on the tree', () => {
      tree.oranges = [orange];
      tree.pickAnOrange();
      expect(tree.oranges).toEqual([]);
    });

    test('should raise an error if the tree has no oranges', () => {
      tree.oranges = [];
      expect(() => tree.pickAnOrange()).toThrow('This tree has no oranges');
    });
  });
});
