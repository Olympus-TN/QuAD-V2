const express = require('express')
const port = 3000
const app = express()
const mongoose=require("mongoose")

const dbf=require("./db/db")

app.use(express.static('public'));

app.use(express.json())


mongoose.connect("mongodb+srv://quad:2222@cluster0.xwb3h.mongodb.net/quad?retryWrites=true&w=majority", { useNewUrlParser: true, 
useCreateIndex: true,
useUnifiedTopology: true 
});


var db = mongoose.connection;

db.on('error', function() {
    console.log('mongoose connection error');
  });
  
  db.once('open', function() {
    console.log('mongoose connected successfully');
  });
  

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  app.post("/signupuser",(req,res)=>{
       dbf.registerUser(req.body,res)
  })

  app.post("/signupcompany",(req,res)=>{
      dbf.registerCompany(res.body,res)
})

  app.post("/logincompany",(req,res)=>{
    dbf.logincompany(req.body,res)
})

app.post("/loginuser",(req,res)=>{
    dbf.loginUser(res.body,res)
})