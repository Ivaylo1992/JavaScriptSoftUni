function loadingBar (percents) {
    let currentLoadingBar = getLoadingBar(percents);
    debugger
    if (percents === 100) {
        return `${percents}% Complete!\n${currentLoadingBar}`
    }

    return `${percents}% ${currentLoadingBar}\nStill loading...`

    function getLoadingBar (reachedPercents) {
        if (reachedPercents === 100) {
            return '[%%%%%%%%%%]'
        }

        if (reachedPercents === 0) {
            return '[..........]'
        }

        let loadingBarStr = '[';
        for (let i = 10; i <= 100; i += 10) {
            if (i > reachedPercents) {
                loadingBarStr += ('.')
            } else {
                loadingBarStr += '%'
            }
        }
        loadingBarStr += ']'

        return loadingBarStr
    }

}

let output1 = loadingBar(30);
let output2 = loadingBar(50);
let output3 = loadingBar(100);

console.log(output1 + '\n');
console.log(output2);
console.log(output3);
