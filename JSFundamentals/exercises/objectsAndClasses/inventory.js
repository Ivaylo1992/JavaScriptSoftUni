function inventory (input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }

        info () {
            console.log(`Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items.join(', ')}`);  
        }
    }

    let heroes = [];

    for (info of input) {
        let tokens = info.split(' / ')
        let heroName = tokens.shift();
        let heroLevel = Number(tokens.shift());
        let heroInventory = tokens.shift().split(', ');

        let hero = new Hero(heroName, heroLevel, heroInventory);

        heroes.push(hero);
    }

    heroes = heroes.sort((a, b) => a.level - b.level)

    for (let hero of heroes) {
        hero.info();
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])