const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');

//this makes customerRouter as express router
const customerRouter = express.Router();
customerRouter.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


customerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    //get body
    console.log("hii manoj")
    let firstName = req.body;
    console.log(firstName)
    

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
       
        dbo.collection("customers").insertOne(firstName, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
        //   db.close();
        
    
    });
    res.json({message:"success"
});       

      });

    
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})
.delete((req, res, next ) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})




customerRouter.route('/update')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');



    
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
        //get body
        console.log("hii manoj")
        let updateBody = req.body;
        console.log("thiss no ////////////" +updateBody)
        var name = updateBody.itemName
    
    
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            // collection.update({_id:"123"}, {author:"Jessica", title:"Mongo facts"});
            // collection.update({_id:"123"}, {$set: {author:"Jessica"}});
    
    
            dbo.collection("customers").updateOne({itemName:name},{$set: {price:updateBody.price,quantity:updateBody.quantity}}, function(err, res) {
              if (err) throw err;
              console.log("Number of documents inserted: " +res);
            //   db.close();
            
        
        });
        res.send("result");
           
    
          });

})
.delete((req, res, next ) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})







customerRouter.route('/view')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log("hii manoj1")


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
       
        dbo.collection("customers").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log("Number of documents inserted: " +JSON.stringify(result));
        //   db.close();
        
        res.json(result)

    });
});
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Will update customer by customerId"
    });
})
.delete((req, res, next ) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
});






customerRouter.route('/delete')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})
.post((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    //get body
  

    
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: "Operation not permitted"
    });
})
.delete((req, res, next ) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');

    console.log("hii manoj")
    let firstName = req.body;
    console.log(firstName)
  

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
       
        dbo.collection("customers").deleteOne(firstName, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: ");
        //   db.close();
      
    
    });
    
    res.json({message:"success"
});

      });

   
})

module.exports = customerRouter;