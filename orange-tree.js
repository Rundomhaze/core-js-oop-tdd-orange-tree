try{
  const Orange = require("./orange");
  } catch {}

class OrangeTree {
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
    this.oranges = [];
  }

  passGrowingSeason() {
    this.age += 1;

    if (this.height < 25) {
      this.height += 2.5
    } else {
      this.height
    };

    if(this.isMature() && !this.isDead()) {
      let count = Math.floor(100 + Math.random() * 300);
      while(count > 0) {
        this.oranges.push(new Orange());
        count--;
      };
    };
  };

  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age > 5;
  }

  isDead() {
    return this.age >= 100
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
    return !!this.oranges.length;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      return 'This tree has no oranges';
    } else {
      return this.oranges.pop();
    }
    //  orange-picking logic goes here
  }
}

try {
  module.exports = OrangeTree;
} catch{}
