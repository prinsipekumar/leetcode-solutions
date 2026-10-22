function convertToTitle(columnNumber) {
    const result = [];

    while (columnNumber > 0) {
        columnNumber--;

        const remainder = columnNumber % 26;
        result.push(String.fromCharCode(65 + remainder));

        columnNumber = Math.floor(columnNumber / 26);
    }

    return result.reverse().join('');
}

console.log(convertToTitle(1));     //A
console.log(convertToTitle(28));    //AB
console.log(convertToTitle(701));   //ZY
console.log(convertToTitle(214));   //HF
