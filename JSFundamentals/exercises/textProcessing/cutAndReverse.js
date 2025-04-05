function cutAndReverse (str) {
    let half = Number(str.length / 2);

    let leftHalf = str.slice(0, half).split('').reverse().join('');

    let rightHalf = str.slice(half, str.length).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
    
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');