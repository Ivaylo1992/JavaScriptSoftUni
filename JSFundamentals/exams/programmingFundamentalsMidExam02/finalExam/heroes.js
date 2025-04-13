function heroesGame (input) {
    let heroesCount = Number(input.shift());

    let heroesObj = [];

    for (let i = 0; i < heroesCount; i++) {
        let [ heroName, hitPoints, manaPoints] = input.shift().split(' ')

        heroesObj[heroName] = {
            'hp': Number(hitPoints),
            'mp': Number(manaPoints)
        };
    }

    let command = input.shift();
    
    while (command != 'End') {
        command = command.split(' - ')
        let action = command.shift();
        let name = command.shift();

        switch (action) {
            case 'CastSpell':
                let manaNeeded = Number(command.shift())
                let spell = command.shift();
                if (heroesObj[name].mp >= manaNeeded) {
                    heroesObj[name].mp -= manaNeeded;
                    console.log(
                        `${name} has successfully cast ${spell} and now has ${heroesObj[name].mp} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spell}!`);
                }

                break;
                
            case 'TakeDamage':
                let damage = Number(command.shift())
                let attacker = command.shift();

                if (damage >= heroesObj[name].hp) {
                    delete heroesObj[name];
                    console.log(`${name} has been killed by ${attacker}!`);
                } else {
                    heroesObj[name].hp -= damage;
                    console.log(
                        `${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[name].hp} HP left!`);   
                }
                break;
            
            case 'Recharge':
                let rechargeAmout = Number(command.shift());
                heroesObj[name].mp += rechargeAmout;

                if (heroesObj[name].mp > 200) {
                    rechargeAmout = rechargeAmout - (heroesObj[name].mp - 200);
                    heroesObj[name].mp = 200;
                }

                console.log(`${name} recharged for ${rechargeAmout} MP!`);
                break;
            
            case 'Heal':
                let healAmout = Number(command.shift());
                heroesObj[name].hp += healAmout;

                if (heroesObj[name].hp > 100) {
                    healAmout = healAmout - (heroesObj[name].hp - 100);
                    heroesObj[name].hp = 100;
                }
                
                console.log(`${name} healed for ${healAmout} HP!`);
                break;
        }

        command = input.shift();
    }

    for (let [hero, heroInfo] of Object.entries(heroesObj)) {
        console.log(`${hero}\n  HP: ${heroInfo.hp}\n  MP: ${heroInfo.mp}`)
    }
}

heroesGame(

    [

        "4",
        
        "Adela 90 150",
        
        "SirMullich 70 40",
        
        "Ivor 1 111",
        
        "Tyris 94 61",
        
        "Heal - SirMullich - 50",
        
        "Recharge - Adela - 100",
        
        "CastSpell - Tyris - 1000 - Fireball",
        
        "TakeDamage - Tyris - 99 - Fireball",
        
        "TakeDamage - Ivor - 3 - Mosquito",
        
        "End" ] )