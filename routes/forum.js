const express = require('express');
const router = express.Router();

const forumController = require('../controller/forum');

router.get('/', forumController.getForums);

router.get('/get/:idForum', forumController.getForumById);

module.exports = router;