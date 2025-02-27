function analyzeSpending(spendingArray) {
    if (!Array.isArray(spendingArray) || spendingArray.length === 0) {
        return "Invalid spending data.";
    }

    let totalSpending = spendingArray.reduce((sum, amount) => sum + amount, 0);
    let averageSpending = totalSpending / spendingArray.length;
    let maxSpending = Math.max(...spendingArray);
    let minSpending = Math.min(...spendingArray);

    return {
        totalSpending,
        averageSpending,
        maxSpending,
        minSpending,
        lowSpending: spendingArray.filter(amount => amount < 50).length,
        moderateSpending: spendingArray.filter(amount => amount >= 50 && amount < 200).length,
        highSpending: spendingArray.filter(amount => amount >= 200).length
    };
}

module.exports = analyzeSpending;
