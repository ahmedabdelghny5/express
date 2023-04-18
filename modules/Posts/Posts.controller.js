const posts = [
  { id: 1, author: "khaled", text: "very good" },
  { id: 2, author: "ahmed", text: "very powerfull" },
  { id: 3, author: "adam", text: "very beautiful" },
];

// get all posts
const getAllPosts = (req, res, next) => {
  res.send(posts);
};

// add post
const addPost = (req, res, next) => {
  const { id } = req.body;
  const result = posts.find((ele) => ele.id == id);

  if (result) {
    res.send("id repeated");
  } else {
    posts.push(req.body);
    res.send({ message: "post added succesfully", data: posts });
  }
};

// get reversed 
const getReversed = (req,res,next) => {
    let postsCopy = [...posts];
          let reversedPosts = postsCopy.reverse()
       
          res.send(reversedPosts);
       
}

// delete post
const deletePost = (req,res,next) => {
  const {id} = req.query
      const result = posts.find((ele) => ele.id == id);
      if (result) {
      
        let index =posts.indexOf(result);
      posts.splice(index,1);
      res.send({message :"post deleted succesfully", data:result});
     
      }else{
        res.send('post not found');
     
      }
}
// update post 
const updatePost = (req,res,next) => {
    const {id} = req.body
    let result = posts.find((ele) => ele.id ==id );
          let userindex = posts.indexOf(result)
          if (result) {
            posts[userindex].author = req.body.author;
            posts[userindex].text = req.body.text;
            res.send({message:'udate done succefully',data:posts});
           
          }else{
            res.send('post not found');
           
          }
}

// search by id 
const searchPosts = (req,res,next) => {
  const {id} = req.query
        const result = posts.find((ele) => ele.id == id);
        if (result) {
         
        res.send({data:result});
        
        }else{
          res.send({message:'invalid id'});
       
        }
}



module.exports = { getAllPosts, addPost,getReversed,deletePost,updatePost,searchPosts };
