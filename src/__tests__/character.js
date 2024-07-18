import Character from '../character';

test('class Character name error test', () => {
  expect(() => new Character('Z', 'Zombie')).toThrow(new Error('Имя персонажа должно быть от 2 до 10 символов'));
});

test('class Character type error test', () => {
  expect(() => new Character('Zombie', 'Z')).toThrow(new Error('Тип персонажа должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'));
});

test('class Character params test', () => {
  expect(new Character('Zombie', 'Zombie', 23, 2, 15, 7)).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});

test('class Character levelUp test', () => {
  const character = new Character('Zombie', 'Zombie', 23, 2, 15, 7);
  character.levelUp();
  expect(character).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 3,
    attack: 18,
    defence: 8.4,
  });
});

test('class Character levelUp error test', () => {
  const character = new Character('Zombie', 'Zombie', 0, 2, 15, 7);
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Character damage test', () => {
  const character = new Character('Zombie', 'Zombie', 23, 2, 15, 7);
  character.damage(5);
  expect(character).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 18.35,
    level: 2,
    attack: 15,
    defence: 7,
  });
});

test('class Character damage test', () => {
  const character = new Character('Zombie', 'Zombie', 23, 2, 15, 7);
  character.damage(40);
  expect(character).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 0,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
