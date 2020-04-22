const express = require('express')
const bodyParder = require ('body-parser')
 const PORT = 3000

 const app = express()

 app. use(bodyParder.json())

 app.get('/', function (req,res){
     res.send('hello from server')
 })
  app.listen(PORT,function(){
      console.log('server running on localhost:' +PORT)
  })