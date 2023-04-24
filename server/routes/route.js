const {Router} = require('express');
const {getItems,postItems} = require('../controllers/controller');
const router = Router();

router.get('/get',getItems);
router.post('/post',postItems);

module.exports = router;