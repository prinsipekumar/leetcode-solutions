var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonths =;

    const toDays = (dateStr) => {
        const month = parseInt(dateStr.substring(0, 2), 10);
        const day = parseInt(dateStr.substring(3, 5), 10);
        
        let dayCount = 0;
        for (let i = 0; i < month - 1; i++) {
            dayCount += daysInMonths[i];
        }
        return dayCount + day;
    };

    const arriveA = toDays(arriveAlice);
    const leaveA = toDays(leaveAlice);
    const arriveB = toDays(arriveBob);
    const leaveB = toDays(leaveBob);

    const start = Math.max(arriveA, arriveB);
    const end = Math.min(leaveA, leaveB);

    return Math.max(0, end - start + 1);
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // 3
