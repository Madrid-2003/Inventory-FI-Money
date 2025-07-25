const express = require('express');
const router = express.Router();
const { createItem, modifyQuantity, fetchAllItems } = require('../controllers/inventory.manager');
const guard = require('../middlewares/token.guard');

router.post('/', guard, createItem);
router.put('/:id/quantity', guard, modifyQuantity);
router.get('/', guard, fetchAllItems);

module.exports = router;
