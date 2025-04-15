function findSum (input) {
    return Number(input.shift()) + Number(input.pop());
}

console.log(findSum(['20', '30', '40']));
