const Triangle = require('./Triangle');

describe('Triangle', () => {
  it('should render a triangle with the given color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
  });
});