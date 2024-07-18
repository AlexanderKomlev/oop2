import Character from '../character.js';

export default class Bowman extends Character {
  constructor(name, type, health = 100, level = 1, attack = 25, defence = 25) {
    super(name, type, health, level, attack, defence);
  }
}
