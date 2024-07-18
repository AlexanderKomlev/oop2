import Zombie from '../zombie.js';

test('class Zombie default test', () => {
  expect(new Zombie('Zombie', 'Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Zombie params test', () => {
  expect(new Zombie('Zombie', 'Zombie', 23, 2, 15, 7)).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
