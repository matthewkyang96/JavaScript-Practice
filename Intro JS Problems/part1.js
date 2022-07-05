//PART 1

function madLib(verb, adj, noun) {
    console.log(`We shall ${verb} the ${adj} ${noun}.`);
}

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

function fizzBuzz(array) {
    const result = [];
    for (let i = 0; i < array.length ; i++) {
        if (array[i] % 3 === 0 ^ array[i] % 5 === 0){
            result.push(array[i]);
        }
    }
    return result;
}

function isPrime(number){
    // assuming number is always positive
    if (number < 2) {
        return false;
    }

    for(let i = 2; i < number ; i ++){
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfNPrimes(n){
    // using isPrime as helper function
    let primeSum = 0;
    let countPrimes = 0;
    let i = 2;
    
    while (countPrimes < n){
        if (isPrime(i)){
            primeSum += i;
            countPrimes++;
        }
        i++;
    }

    return primeSum;
}
