const Circle = require("./Circle");

describe('Circle', () => {
  it('should render a circle with the given color', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('red circle');
  });
});