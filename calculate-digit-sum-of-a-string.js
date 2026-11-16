var digitSum = function(s, k) {
    while (s.length > k) {
        let next = "";

        for (let i = 0; i < s.length; i += k) {
            let sum = 0;

            for (let j = i; j < Math.min(i + k, s.length); j++) {
                sum += s.charCodeAt(j) - 48;
            }

            next += sum;
        }

        s = next;
    }

    return s;
};

console.log(digitSum("11111222223", 3));  // "135"
