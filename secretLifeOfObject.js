class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  }
  minus(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

const vec = new Vector(5, 4);

// console.log(vec.plus(new Vector(1, 2)));
// console.log(vec.minus(new Vector(1, 4)));

class Group {
  constructor() {
    this.collection = [];
  }
  add(value) {
    if (this.has(value)) {
      this.collection.push(value);
      return true;
    } else {
      return false;
    }
  }
  delete(value) {
    if (this.has(value)) {
      console.log(this.collection.indexOf(value));
      return true;
    } else {
      return false;
    }
  }
  has(value) {
    if (this.collection.indexOf(value) === -1) {
      return true;
    } else {
      return false;
    }
  }
  print() {
    this.collection.forEach((item) => console.log(item));
  }
  from(iterable) {
    if (iterable === null || iterable === undefined) {
      return false;
    } else {
      for (item of iterable) {
        this.collection.push(item);
      }
    }
  }
}

const group = new Group();

group.add(1);
group.add(1);
group.add(2);
group.add(3);
group.add(4);

// group.print();

group.delete(3);
// console.log("**********************");

// group.print();
