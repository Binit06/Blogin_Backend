const aiService = require('../services/aiService');

const createArticleFromTitle = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const articleContent = await aiService.generateArticle(title);
    res.status(200).json({ title, content: articleContent });
  } catch (error) {
    next(error); // Pass to error handler middleware
  }
};

const summariseArticleFromBody = async (req, res, next) => {
  try {
    const { article } = req.body;
    if (!article) {
      return res.status(400).json({ message: 'Article is required' });
    }
    const articleSummary = await aiService.summariseArticle(article);
    res.status(200).json({ summary: articleSummary });
  } catch (error) {
    next(error);
  }
}

module.exports = { createArticleFromTitle, summariseArticleFromBody };

