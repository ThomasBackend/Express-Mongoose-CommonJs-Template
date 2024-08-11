const express = require('express');
const auth = require('../middleware/auth');
const {createArticle, getArticlesByPublishingDate} = require('../controllers/article')

const router = express.Router();

router.get('/fetch/date', getArticlesByPublishingDate);
router.post('/create', createArticle);


module.exports = router;

