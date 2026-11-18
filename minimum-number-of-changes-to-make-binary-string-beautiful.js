var minChanges = function(s) {
    let changes = 0;

    for (let i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) {
            changes++;
        }
    }

    return changes;
};

const s = "1001";
console.log(minChanges(s)); //2
