const router = require('express').Router();
let User = require('../models/users.model');
let FavPlayer = require('../models/favPlayers.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {

  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const imageUrl = req.body.imageUrl;

  const newUser = new User({ name, username, password, imageUrl });
  const newFavData = new FavPlayer({ username })

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));


  return newFavData.save()
    .then(() => res.json('newFavData added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/login').post(async (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  console.log("Inside Login")

  const foundUser = await User.findAndValidate(username, password)
  if (foundUser) {
    console.log("User Exists")
    //  res.send({'username': username}); 
    res.send(username);
  } else {
    console.log("False Login")
  }
  // console.log("req.session.user_id",req.session)
  // console.log("req.session.user_id",req.session.user_id)
});

module.exports = router;