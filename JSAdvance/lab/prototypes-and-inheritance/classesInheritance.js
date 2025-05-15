function createClasses() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }

    get area() {
      return 0;
    }

    changeUnits(newUnits) {
      this.units = newUnits;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }

    convertUnits(value) {
      const conversion = {
        m: value / 100,
        cm: value,
        mm: value * 10,
      };
      return conversion[this.units];
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this._radius = radius;
    }

    get area() {
      const radius = this.convertUnits(this._radius);
      return Math.PI * radius * radius;
    }

    toString() {
      const radius = this.convertUnits(this._radius);
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = width;
      this._height = height;
    }

    get area() {
      const width = this.convertUnits(this._width);
      const height = this.convertUnits(this._height);
      return width * height;
    }

    toString() {
      const width = this.convertUnits(this._width);
      const height = this.convertUnits(this._height);
      return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
    }
  }

  return { Figure, Rectangle, Circle };
}

let classes = createClasses();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
// assert.equal(c.area, 78.53981633974483, "1");
// assert.equal(
//   c.toString(),
//   "Figures units: cm Area: 78.53981633974483 - radius: 5",
//   "2"
// );
let r = new Rectangle(3, 4, "mm");
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50

console.log(r.toString());
console.log("Figures units: mm Area: 1200 - width: 30, height: 40");

let c2 = new Circle(5);
// assert.equal(c.area, 78.53981633974483, "1");
// assert.equal(
//   c.toString(),
//   "Figures units: cm Area: 78.53981633974483 - radius: 5",
//   "2"
// );
let r2 = new Rectangle(3, 4, "mm");
// assert.equal(r.area, 1200, "3");
// assert.equal(
//   r.toString(),
//   "Figures units: mm Area: 1200 - width: 30, height: 40",
//   "4"
// );
r.changeUnits("cm");
// assert.equal(r.area, 12, "5");
// assert.equal(
//   r.toString(),
//   "Figures units: cm Area: 12 - width: 3, height: 4",
//   "5"
// );

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
