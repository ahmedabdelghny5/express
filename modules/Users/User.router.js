const {getAllUser,addUser,sortingUsers,deleteUser,updateUser,searchUser} = require('./User.contoller');

const router = require('express').Router();



router.get('/getalluser',getAllUser)
router.post('/adduser',addUser);
router.get('/sortusers',sortingUsers);
router.delete('/deleteuser',deleteUser);
router.put('/update',updateUser);
router.get('/searchuser',searchUser)





module.exports = router