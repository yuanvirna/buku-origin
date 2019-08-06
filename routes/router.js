const { Router } = require('express');
// const usersController = require('./../controllers/usersController.js')

const router = new Router();
const bookControl = require('../controllers').book;

router.get('/api/book', bookControl.list);
router.post('/api/book', bookControl.add);

// router.get('/', usersController.index);
// router.get('/users', usersController.getUsers);
// router.post('/users', usersController.createUsers);
// router.put('/users/:id', usersController.updateUsers);
// router.delete('/users/:id',usersController.deleteUsers)
// router.get('/sss',(req, res)=>{

    
// })
module.exports = router;