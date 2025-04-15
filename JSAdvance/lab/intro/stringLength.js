function findLength (a, b, c) {
    let totalLength = a.length + b.length + c.length;
    let avgLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(avgLength);
}

findLength('chocolate', 'ice cream', 'cake')