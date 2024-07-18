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
  expect(new Daemon('Daemon', 'Daemon', 23, 2, 15, 7)).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
