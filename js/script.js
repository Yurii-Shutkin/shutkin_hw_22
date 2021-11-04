const getParalindrom = function(num, stepsArr = []) {
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
    return getParalindrom(num + arr, stepsArr);
}

console.log(getParalindrom(96));
console.log(getParalindrom(39));
console.log(getParalindrom(134));
console.log(getParalindrom(89));