require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GEMINI_API_KEY; // Securely load API key from .env
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getGeminiAnalysis(spendingData) {
    const prompt = `Analyze the following spending pattern: ${JSON.stringify(spendingData)}. and give me the feedback of it and garde it between 1 to 5 under 100 words `;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error fetching Gemini response:", error);
        return `Error: ${error.message}`;
    }
}

module.exports = getGeminiAnalysis;
