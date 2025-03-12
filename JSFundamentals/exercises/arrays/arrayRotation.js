function arrayRotation(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let num = arr.shift();
        arr.push(num);
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);