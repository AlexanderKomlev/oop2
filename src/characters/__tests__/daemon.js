import Daemon from '../daemon';

test('class Daemon default test', () => {
  expect(new Daemon('Daemon', 'Daemon')).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Daemon params test', () => {
  expect(new Daemon('Daemon', 'Daemon')).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Daemon levelUp test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.levelUp();
  expect(character).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('class Daemon levelUp error test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Daemon damage test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.damage(5);
  expect(character).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 97,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Daemon damage test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.damage(250);
  expect(character).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
