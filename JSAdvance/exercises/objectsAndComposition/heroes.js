function createHeroes (input) {
    let result = [];
    
    for (let heroInfo of input) {
        let [name, strLevel, strItems] = heroInfo.split(' / ');
        let level = Number(strLevel);
        let items = strItems ? strItems.split(', '): [];
        result.push({name, level, items})
    }

    console.log(JSON.stringify(result.slice(0,result.length - 1)));
    
}
