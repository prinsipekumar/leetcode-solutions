function titleToNumber(columnTitle) {
    let result = 0;

    for (const char of columnTitle) {
        result = result * 26 + (char.charCodeAt(0) - 64);
    }

    return result;
}

console.log(titleToNumber("A"));  //1
console.log(titleToNumber("AB"));  //28
console.log(titleToNumber("ZY"));  //701
console.log(titleToNumber("FXSHRXW"));  //2147483647
