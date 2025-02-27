const analyzeSpending = require('./spendingAnalysis');
const getGeminiAnalysis = require('./gemini');

async function main() {
    let userSpending = [120, 45, 60, 30, 500, 75, 200, 10, 150, 300];
    let analysis = analyzeSpending(userSpending);
    
    console.log("Spending Analysis:", analysis);

    let aiInsights = await getGeminiAnalysis(analysis);
    console.log("Gemini AI Insights:", aiInsights);
}

main();
