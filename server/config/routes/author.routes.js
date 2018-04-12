const { authorController } = require('../../controllers');
const router = require('express').Router();

router.get('/', authorController.index);
router.get('/new', authorController.new);
router.get('/:id', authorController.show);
router.get('/:id/edit', authorController.edit);
router.post('/', authorController.create);
router.post('/:id', authorController.update);
router.post('/:id/delete', authorController.destroy);

module.exports = router;
