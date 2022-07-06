//Monkey-patching Array Class

Array.prototype.uniq = function (){
    let uniqueArray = [];

    for (let i = 0; i < this.length; i++) {
        if (!uniqueArray.includes(this[i])) {
            uniqueArray.push(this[i]);
        }
    }
    return uniqueArray;
};

Array.prototype.twoSum = function (){
    let pairsIndex = [];
    for (let i = 0; i < this.length - 1; i ++){
        for (let j = i + 1; j < this.length; j ++){
            if (this[i]+this[j] === 0){
                pairsIndex.push([i,j]);
            }
        }
    }
    return pairsIndex;
};

Array.prototype.transpose = function () {
    let transposed = [];

    for (let i = 0; i < this.length; i++){
        let row = [];
        for(let j = 0; j < this.length; j++){
            row.push(this[j][i]);
        }
        transposed.push(row);
    }
    return transposed;
};

