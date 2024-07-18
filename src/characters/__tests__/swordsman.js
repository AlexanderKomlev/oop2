import Swordsman from '../swordsman';

test('class Swordsman default test', () => {
  expect(new Swordsman('Swordsman', 'Swordsman')).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('class Swordsman params test', () => {
  expect(new Swordsman('Swordsman', 'Swordsman', 23, 2, 15, 7)).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
