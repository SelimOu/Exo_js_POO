class Warrior {
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life
    }
    attack(opponant) {
        opponant.life = opponant.life - this.power;
        if (opponant.life < 0) {
            opponant.life = 0
        }
        return `${this.name} attaque avec un pouvoir de ${this.power} ${opponant.name}, ${opponant.name} ne lui reste que ${opponant.life} de vie `;
    }
    isAlive() {
        if (this.life == 0) {
            return false
        }
        else if (this.life > 0) {
            return true
        }
    }
}
class WarriorAxe extends Warrior {
    constructor(name, power, life) {
        super(name, power, life)
        this.basicPower = this.power
    }
    attack(opponant) {
        if (opponant instanceof WarriorSword) {
            this.basicPower = (this.power) * 2;
            return super.attack(opponant)
        }
        else
            return super.attack(opponant)
    }
}
class WarriorSword extends Warrior {
    constructor(name, power, life) {
        super(name, power, life)
        this.basicPower = this.power
    }
    attack(opponant) {
        if (opponant instanceof WarriorSpear) {
            this.power = this.basicPower * 2;
            return super.attack(opponant)
        }
        else
            return super.attack(opponant)
    }
}
class WarriorSpear extends Warrior {
    constructor(name, power, life) {
        super(name, power, life)
        this.basicPower = this.power
    }
    attack(opponant) {
        if (opponant instanceof WarriorAxe) {
            this.power = this.basicPower * 2;
            return super.attack(opponant)
        }
        else
            return super.attack(opponant)
    }
}








