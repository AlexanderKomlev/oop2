import Magician from '../magician.js';

test('class Magician default test', () => {
  expect(new Magician('Magician', 'Magician')).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Magician params test', () => {
  expect(new Magician('Magician', 'Magician', 23, 2, 15, 7)).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
