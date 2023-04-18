

const express = require("express");
const app = express();
const userRouter = require("./modules/Users/User.router");
const postsRouter = require("./modules/Posts/Posts.router");
app.use(express.json());

app.use(userRouter);
app.use(postsRouter);

app.listen(3000, () => {
  console.log("server is running ");
});

