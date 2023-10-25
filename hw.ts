interface IAttackMechanism {
    attack(): void;
}

interface IDefenceMechanism {
    defend(): void;
}

// Implement the different types of attacking mechanisms
class ClubAttack implements IAttackMechanism {
    attack(): void {
        console.log('Attacking with a club');
    }
}

class SwordAttack implements IAttackMechanism {
    attack(): void {
        console.log('Attacking with a sword');
    }
}

class BowAndArrowAttack implements IAttackMechanism {
    attack(): void {
        console.log('Attacking with a bow and arrow');
    }
}

// Implement the different types of defending mechanisms
class ShieldDefence implements IDefenceMechanism {
    defend(): void {
        console.log('Defending with a shield');
    }
}

class ArmorDefence implements IDefenceMechanism {
    defend(): void {
        console.log('Defending with armor');
    }
}

class TunicDefence implements IDefenceMechanism {
    defend(): void {
        console.log('Defending with a tunic');
    }
}

// Abstract class for RPG characters
abstract class RPGCharacter {
    constructor(
        private attackMechanism: IAttackMechanism,
        private defenceMechanism: IDefenceMechanism
    ) {}

    attack(): void {
        this.attackMechanism.attack();
    }

    defend(): void {
        this.defenceMechanism.defend();
    }

    collectGold(): void {
        console.log('Collecting gold');
    }

    changeFightingStyle(
        attackMechanism: IAttackMechanism,
        defenceMechanism: IDefenceMechanism
    ): void {
        this.attackMechanism = attackMechanism;
        this.defenceMechanism = defenceMechanism;
        console.log('Fighting style changed');
    }
}

// Character classes
class Ogre extends RPGCharacter {
    constructor() {
        super(new ClubAttack(), new ShieldDefence());
    }
}

class Peon extends RPGCharacter {
    constructor() {
        super(new ClubAttack(), new ShieldDefence());
    }
}

class Knight extends RPGCharacter {
    constructor() {
        super(new SwordAttack(), new ArmorDefence());
    }
}

class Archer extends RPGCharacter {
    constructor() {
        super(new BowAndArrowAttack(), new TunicDefence());
    }
}
