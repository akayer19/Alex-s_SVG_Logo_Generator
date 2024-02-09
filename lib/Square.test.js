const Square = require('./Square');

describe('Square', () => {
  it('should render a square with the given color', () => {
    const shape = new Square();
    shape.setColor('green');
  });
});