function inventory (input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }

        info () {
            console.log(`Hero: ${this.name}\nlevel => ${this.level}Items => ${this.items.join(', ')}`);  
        }
    }

    for (info of input) {

    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])