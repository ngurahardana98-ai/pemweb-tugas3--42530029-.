const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/buku.controller');

router.get('/', bukuController.index);
router.get('/add', bukuController.renderAddForm);
router.post('/add', bukuController.create);
router.get('/edit/:id', bukuController.renderEditForm);
router.post('/edit/:id', bukuController.update);
router.post('/delete/:id', bukuController.delete);

module.exports = router;