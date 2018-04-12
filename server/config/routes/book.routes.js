const { bookController } = require('../../controllers');
const router = require('express').Router();

router.get('/', bookController.index);
router.get('/new', bookController.new);
router.get('/:id', bookController.show);
router.get('/:id/edit', bookController.edit);
router.post('/', bookController.create);
router.post('/:id', bookController.update);
router.post('/:id/delete', bookController.destroy);

module.exports = router;
