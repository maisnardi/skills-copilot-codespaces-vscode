// Create web server with Express
// Express is a Node.js web application framework
const express = require('express');
const router = express.Router();

// Load the controller that contains CRUD methods for comments
const commentsController = require('../controllers/commentsController');

// GET request for creating a comment. NOTE This must come before routes that display comment (uses id).
router.get('/comment/create', commentsController.comment_create_get);

// POST request for creating comment.
router.post('/comment/create', commentsController.comment_create_post);

// GET request to delete comment.
router.get('/comment/:id/delete', commentsController.comment_delete_get);

// POST request to delete comment.
router.post('/comment/:id/delete', commentsController.comment_delete_post);

// GET request to update comment.
router.get('/comment/:id/update', commentsController.comment_update_get);

// POST request to update comment.
router.post('/comment/:id/update', commentsController.comment_update_post);

// GET request for one comment.
router.get('/comment/:id', commentsController.comment_detail);

// GET request for list of all comment items.
router.get('/comments', commentsController.comment_list);

module.exports = router;