const OrangeTree = require('../orange-tree');
const Orange = require('../orange');

// Test-Driven Development
describe('OrangeTree', () => {

  let tree;
  let age;
  let height;
  let oranges;

  beforeEach(() => {
    tree = new OrangeTree();
    age = 0;
    height = 0;
    oranges = [];
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
      tree.passGrowingSeason()
      expect(tree.age).toBe(1)
      tree.passGrowingSeason()
      expect(tree.age).toBe(2)
    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      tree.passGrowingSeason()
      expect(tree.height).toBe(2.5)
      tree.passGrowingSeason()
      expect(tree.height).toBe(5)
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      if (age > 5 && age < 100) {
        tree.passGrowingSeason();
        expect(tree.oranges.length).notToBe(0)
      }
    });

  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      if (age > 5) {
        expect(tree.isMature()).toBe(true)
      }
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      if (age < 5) {
        expect(tree.isMature()).toBe(false)
      }
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      if (age < 100) {
        expect(tree.isDead()).toBe(false)
      }
    });

    test('should return true for a dead tree', () => {
      if (age >= 100) {
        expect(tree.isDead()).toBe(true)
      }
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      tree.passGrowingSeason();
      if (tree.oranges.length != 0) {
        expect(tree.hasOranges()).toBe(true)
      };
    });

    test('should return false if the tree has no oranges', () => {
      expect(tree.hasOranges()).toBeFalsy();
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      const age = 10;
      const height = 10;
      const tree = new OrangeTree(age, height)
      tree.passGrowingSeason()
      expect(tree.pickAnOrange()).toBeInstanceOf(Object);
    });

    test('the returned orange should no longer be on the tree', () => {
      const age = 10;
      const height = 10;
      const tree = new OrangeTree(age, height)
      tree.passGrowingSeason()
      let orangesLength = tree.oranges.length
      tree.pickAnOrange()
      expect(orangesLength == tree.oranges.length).toBe(false)
    });

    test('should raise an error if the tree has no oranges', () => {
      const age = 4;
      const height = 5;
      const tree = new OrangeTree(age, height)
      tree.passGrowingSeason()
      expect(tree.pickAnOrange()).toBe('This tree has no oranges')
    });
  });
});
