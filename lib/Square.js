const Shape = require("./shape");

class Square {
  constructor() {
    this.color = 'black'; // Default color
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    // Generate SVG representation of a circle with the specified color
    return `${this.color} square`;
  }
}

module.exports = Square;