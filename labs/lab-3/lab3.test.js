const calculator = require('./lab3')

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });


test('positive infinity', () => {
  const res = calculator.addNumbers(Number.MAX_VALUE, 1E292)
  expect(res >= Number.POSITIVE_INFINITY).toBe(true);
})