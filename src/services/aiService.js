const model = require('../config/gemini');

const generateArticle = async (title) => {
  try {
    const prompt = `Write a detailed, engaging, and professional blog article on the title: "${title}". Ensure the content is at least 500 words, includes subheadings, and is suitable for publishing on a blog. Make the article consist of plain letters no special signs.`;
    const response = await model.generateContent(prompt);
    const articleContent = response.response.text();
    return articleContent;
  } catch (error) {
    throw new Error(`Failed to generate article: ${error.message}`);
  }
};

const summariseArticle = async (article) => {
  try {
    const prompt = `Write a detailed, engaging, and professional summary of blog article ${article}. Ensure the content is at most 50 words`;
    const response = await model.generateContent(prompt)
    const articleSummary = response.response.text();
    return articleSummary;
  } catch (error) {
    throw new Error(`Failed to generate article: ${error.message}`);
  }
};
module.exports = { generateArticle, summariseArticle };

