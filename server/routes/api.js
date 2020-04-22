const express = require('express');
const router =express.Router() ;
const mongoose = require('mongoose');
const User = require('../models/user');
const db ="mongodb+srv://WeShopUp:WeShopUp@weshopup-kc46s.mongodb.net/test?retryWrites=true&w=majority";
// si vous voulez connecter sur la base "mail de alts mongo : chamchoum.chm@gmail.com , mot de pass :chinamieajab1994 ,"//
//non de la base "WeShopUp" mot de pass de la base " WeShopUp"

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});
//hh

router.get('/',(req, res) =>
{
    res.send('From Api route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        res.status(200).send(registeredUser)
      }
    })
  })


module.exports =router