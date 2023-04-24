const {Router} = require('express');
const {getItems,postItems,updateItems,deleteItems} = require('../controllers/controller');
const router = Router();

router.get('/get',getItems);
router.post('/post',postItems);
router.post('/update/:id',updateItems);
router.post('/delete/:id',deleteItems);

module.exports = router;