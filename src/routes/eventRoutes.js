const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/auth');

router.get('/', eventController.list);
router.get('/:id', eventController.detail);

router.post('/', authMiddleware, eventController.create);
router.put('/', authMiddleware, eventController.update);
router.delete('/:id', authMiddleware, eventController.delete);

router.post('/:id/enrollment', authMiddleware, eventController.enroll);
router.delete('/:id/enrollment', authMiddleware, eventController.unenroll);

module.exports = router;
