import Undead from '../undead.js';

test('class Undead default test', () => {
  expect(new Undead('Undead', 'Undead')).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Undead params test', () => {
  expect(new Undead('Undead', 'Undead', 23, 2, 15, 7)).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
