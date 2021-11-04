const getPalindrom = function(num, stepsArr = []) {
    const obj = {};
    let arr = [num];
    arr = arr.join().split('');
    
    if(arr.join() === arr.reverse().join()) {
        obj.steps = stepsArr;
        obj.result = num;
        return obj;
    }
    arr = +arr.join('');
    stepsArr.push(num);
    return getPalindrom(num + arr, stepsArr);
}

console.log(getPalindrom(96));
console.log(getPalindrom(39));
console.log(getPalindrom(134));
console.log(getPalindrom(89));