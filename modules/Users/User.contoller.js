const users = [
  { id: 1, name: "khaled", age: 35 },
  { id: 2, name: "ahmed", age: 25 },
  { id: 3, name: "adam", age: 15 },
];

// get all users
const getAllUser = (req, res, next) => {
  res.json({ data: users });
};

// add user
const addUser = (req, res, next) => {
  const { id } = req.body;
  const result = users.find((ele) => ele.id == id);
  if (result) {
    res.json("id repeated");
  } else {
    users.push(req.body);
    res.json({ message: "succeful", data: users });
  }
};

// sorting users
const sortingUsers = (req, res, next) => {
  let sorted = users.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  res.json({ data: sorted });
};

// delete user 
const deleteUser = (req,res,next) => {
  const {id} = req.body
    const result = users.find((ele) => ele.id == id);
          if (result) {
          
        let index =users.indexOf(result);
          users.splice(index,1);
          res.json({message:'user deleted succefully',data:users});
         
          }else{
            res.json({messgae:'user not found'});
           
          }
}

// update user 
const updateUser = (req,res,next) =>{
    const {id} = req.body
  
    let result = users.find((ele) => ele.id ==id );
          let userindex = users.indexOf(result)
          if (result) {
            users[userindex].name = req.body.name;
            users[userindex].age = req.body.age;
            res.json({message:'udate done succefully',data:users});
          
          }else{
            res.json('user not found');
          
          }
}

// search by id
const searchUser = (req,res,next) => {
    const {id} = req.query
    const result = users.find((ele) => ele.id == id);
          if (result) {
         
          res.json({data:result});
          
          }else{
            res.json({message:'user not found'});
           
          }
}



module.exports = { getAllUser, addUser, sortingUsers,deleteUser,updateUser,searchUser };
