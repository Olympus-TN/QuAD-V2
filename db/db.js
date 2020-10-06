const mongoose = require("mongoose");
const bcrypt=require('bcryptjs')
const saltRounds = 10;

const schemaUsers = new mongoose.Schema({ 
    name: String,
    password:String,
    AccountNumber:Number,
    email:String,
    phonenumber:String,
    skills:Array,
    bio:String,
    company:Array,
    location:String,
    applied:Array
  })

  const Users= mongoose.model('Users', schemaUsers);

  const schemacompany = new mongoose.Schema({ 
    name: String,
    password:String,
    AccountNumber:Number,
    email:String,
    phonenumber:String,
    location:String,
    Jobs:Array
  })
  const company= mongoose.model('company', schemacompany);

  const schemaAccountNumberC=new mongoose.Schema({AccountNumber:Number})

  const AccountNumberdC=mongoose.model('AccountNumberC', schemaAccountNumberC);

  const idC=new AccountNumberdC({AccountNumber:0})

  
  const schemaAccountNumberU=new mongoose.Schema({AccountNumber:Number})

  const AccountNumberdU=mongoose.model('AccountNumberU', schemaAccountNumberU);

  const idU=new AccountNumberdU({AccountNumber:0})


  const registerUser = async function (data, res) {
    var AccountNumber;
    var user;
    await Users.findOne({ name: data.name }).then((result) => {user = result;});
    if (user !== null) {

      res.send({ Registred: true });
    }else {
      await AccountNumberdU.find().then((data) => {AccountNumber = data[0].AccountNumber;});
  
      await AccountNumberdU.updateOne({ AccountNumber: AccountNumber + 1 });
  
   var password = data.password
      bcrypt.hash(password, saltRounds, (err, hash) => {
      return new Users({
        name: data.name,
        password:hash,
        AccountNumber:AccountNumber,
        email:data.email,
        phonenumber:data.phonenumber,
        skills:[],
        bio:"",
        company:[],
        location:"",
        applied:[]
      }).save((err, doc) => {
        res.send({ Registred: false })
      });
      })
    }
  };
  
 
const loginUser = function (data, res) {
    Users.findOne({ name: data.name }).then((result) => {
      if(result===null){
    //    res.send({ login: false });
       
     }else{
         bcrypt.compare(data.password, result.password, (err, results) => {
           if (results === true) {
               console.log(result)
            //  res.send({
            //    login: true,
            //    data: { name: result.name, Id: result.AccountNumber, skin: result.currentskin },
            //  });
           } else {
            //  res.send({ login: false });
           }
         });
           
     }
   });
 };

 



  const registerCompany = async function (data, res) {
    var AccountNumber;
    var user;
    await company.findOne({ name: data.name }).then((result) => {user = result;});
    if (user !== null) {

      res.send({ Registred: true });

    }else {
      await AccountNumberdC.find().then((data) => {AccountNumber = data[0].AccountNumber;});
  
      await AccountNumberdC.updateOne({ AccountNumber: AccountNumber + 1 });
  
   var password = data.password
      bcrypt.hash(password, saltRounds, (err, hash) => {
      return new company({
        name: data.name,
        password:hash,
        AccountNumber:AccountNumber,
        email:data.email,
        phonenumber:"",
        location:"",
        Jobs:[]
      }).save((err, doc) => {
          console.log(doc)
        res.send({ Registred: false })
      });
      })
    }
  };

  const logincompany = function (data, res) {
    company.findOne({ name: data.name }).then((result) => {
      if(result===null){
    //    res.send({ login: false });
       

     }else{
         bcrypt.compare(data.password, result.password, (err, results) => {
           if (results === true) {
               console.log(result)
            //  res.send({
            //    login: true,
            //    data: { name: result.name, Id: result.AccountNumber, skin: result.currentskin },
            //  });
           } else {
            //  res.send({ login: false });
           }
         });
           
     }
   });
 };

  module.exports = {
    registerUser,
    registerCompany ,
    loginUser,
    logincompany

  };
