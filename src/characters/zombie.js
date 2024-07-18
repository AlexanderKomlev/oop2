import Character from '../character.js';

export default class Zombie extends Character {
  constructor(name, type, health = 100, level = 1, attack = 10, defence = 40) {
    super(name, type, health, level, attack, defence);
  }
}
