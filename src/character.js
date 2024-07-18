export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }
    if (!this.types.includes(type)) {
      throw new Error('Тип персонажа должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

Character.prototype.types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
