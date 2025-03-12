function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpenses = Math.floor(lostFightsCount / 2) * helmetPrice;
    let swordExpenses = Math.floor(lostFightsCount / 3) * swordPrice;
    let shieldExpenses = Math.floor(lostFightsCount / 6) * shieldPrice;
    let armorExpenses = Math.floor(lostFightsCount / 12) * armorPrice;
    
    let totalExpenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
    
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    
);