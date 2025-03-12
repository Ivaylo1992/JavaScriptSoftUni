function maxSequenceOfEqualElements(arr){
    let sequenceArr = [];
    let maxElementSeq = [];

    for (el of arr) {
        if (!sequenceArr.length || sequenceArr.includes(el)) {
            sequenceArr.push(el);
        } else {
            if (sequenceArr.length > maxElementSeq.length) {
                maxElementSeq = sequenceArr;
            }
            sequenceArr = [];
            sequenceArr.push(el);
        }
    }
    maxElementSeq.length > 0 ? console.log(maxElementSeq.join(' ')) : console.log(sequenceArr.join(' ')) 
    
}

maxSequenceOfEqualElements([4, 4, 4, 4]);