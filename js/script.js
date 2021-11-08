const getPalindrom = function(num, stepsCounter = 0) {
    const obj = {};
    let arr = [num];
    arr = arr.join().split('');
    
    if(arr.join() === arr.reverse().join()) {
        obj.result = num;
        obj.steps = stepsCounter;
        return obj;
    }
    
    arr = +arr.join('');
    return getPalindrom(num + arr, stepsCounter += 1);
}

console.log(getPalindrom(96));
console.log(getPalindrom(39));
console.log(getPalindrom(134));
console.log(getPalindrom(89));