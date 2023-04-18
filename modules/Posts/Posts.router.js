const { getAllPosts,addPost,getReversed,deletePost,updatePost,searchPosts } = require('./Posts.controller')

const router = require('express').Router()



router.get('/getallposts',getAllPosts)
router.post('/addpost',addPost);
router.get('/getallpostsreversed',getReversed);
router.delete('/deletepost',deletePost);
router.put('/updatepost',updatePost);
router.get('/searchpost',searchPosts);










module.exports = router