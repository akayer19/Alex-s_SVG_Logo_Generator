const Shape = require("./shape");

class Circle {
  constructor() {
    this.color = 'black'; // Default color
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    // Generate SVG representation of a circle with the specified color
    return `${this.color} circle`;
  }
}

module.exports = Circle;