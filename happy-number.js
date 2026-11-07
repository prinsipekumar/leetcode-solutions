var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);
    
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    
    return fast === 1;
};

function getNext(num) {
    let totalSum = 0;
    while (num > 0) {
        let digit = num % 10;
        totalSum += digit * digit;
        num = Math.floor(num / 10);
    }
    return totalSum;
}

console.log(isHappy(19));  // true
console.log(isHappy(2));  // false
