// const Orange = require("./orange");

class OrangeTree {
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
    this.oranges = [];
  };

  passGrowingSeason() {
    this.age += 1
    if (this.height <= 22.5) {
      this.height += 2.5;
    };

    if (this.isMature() && !this.isDead()) {
      let countOranges = Math.floor(100 + Math.random() * (201))
      for (let i = 0; i <= countOranges; i++){
        let newOrange = new Orange()
        this.oranges.push(newOrange)
      };
    }
  };

  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age > 5 ? true : false;
  };

  isDead() {
    return this.age > 99 ? true : false;  
  };

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
    if(this.oranges.length > 0) return true
    return false
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    } else {
      return this.oranges.pop()
    }
    //  orange-picking logic goes here
  }
}


// module.exports = OrangeTree;
