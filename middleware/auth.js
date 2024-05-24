const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.authentication = (req,res,next)=>{
    const token = req.header('Authorization');
    const user = (jwt.verify(token , 'secretkey' ))
    console.log(user.userId)
   User.findByPk(user.userId)
  .then(foundUser => {
    if (foundUser) {
      req.user = foundUser;
      console.log(foundUser + "this is founduser");
      next();
    } else {
      // Handle case where user with ID not found
      console.error(`User with ID ${user.userId} not found`);
      res.status(404).send("User not found");
    }
  })
  .catch(err => {
    // Handle database query error
    console.error("Error querying user:", err);
    res.status(500).send("Internal server error");
  });
    

}