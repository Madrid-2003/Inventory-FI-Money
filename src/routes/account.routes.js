const express = require('express');
const router = express.Router();
const handler = require('../controllers/account.handler'); // ✅ Make sure this is correct

router.post('/register', handler.createAccount);
router.post('/', handler.authenticate);

module.exports = router;
