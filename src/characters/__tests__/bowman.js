import Bowman from '../bowman';

test('class Bowman default test', () => {
  expect(new Bowman('Bowman', 'Bowman')).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Bowman params test', () => {
  expect(new Bowman('Bowman', 'Bowman', 23, 2, 15, 7)).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 23,
    level: 2,
    attack: 15,
    defence: 7,
  });
});
