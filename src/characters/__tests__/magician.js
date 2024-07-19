import Magician from '../magician';

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
  expect(new Magician('Magician', 'Magician')).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Magician levelUp test', () => {
  const character = new Magician('Magician', 'Magician');
  character.levelUp();
  expect(character).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('class Magician levelUp error test', () => {
  const character = new Magician('Magician', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Magician damage test', () => {
  const character = new Magician('Magician', 'Magician');
  character.damage(5);
  expect(character).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 97,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Magician damage test', () => {
  const character = new Magician('Magician', 'Magician');
  character.damage(250);
  expect(character).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
