var mysql = require('mysql');
var db_config = require('../config/db_config') 

var connection = mysql.createConnection(db_config);

connection.connect((err)=>{
    if(err) err
    console.log('mysql connected')
})

function getAllPuppies(req, res, next) {
connection.query('select * from pups',(err,results,fields)=>{

    if(err) return next(err);
         res.status(200)
          .json({
            status: 'success',
            data: results,
            message: 'Retrieved ALL puppies'
          });

})
  }

  function createPuppy(req, res, next) {
    req.body.age = parseInt(req.body.age);
    var bodyObj = [req.body.name,req.body.breed,req.body.age,req.body.sex]
    var sql = 'INSERT INTO pups(`name`,breed,age,sex) VALUES(?,?,?,?)';
    connection.query(sql,bodyObj,(err,results,fields)=>{
        if(err) return next(err)
        res.status(200)
              .json({
                status: 'success',
                message: 'Inserted one puppy'
              });

    })
  }

  function updatePuppy(req, res, next) {
    var sql = "UPDATE pups SET `name`= ?, breed = ?,age = ?, sex = ? WHERE id = ?";
    var bodyObj = [req.body.name, req.body.breed, parseInt(req.body.age),
            req.body.sex, parseInt(req.params.id)]
    connection.query(sql,bodyObj,(err,results,fields)=>{
        console.log(bodyObj)
        if(err) return next(err)
            res.status(200)
          .json({
            status: 'success',
            message: 'Updated puppy'
          });
    });
  }

  function removePuppy(req, res, next) {
    var pupID = parseInt(req.params.id);
    var sql = "DELETE FROM pups  WHERE id = ?";

    connection.query(sql,pupID,(err,results,fields)=>{
        if(err) return (err);
        res.status(200)
           .json({
               status: 'success',
               message: `Removed ${results.rowCount} puppy`
           })
    })
    
    // db.result('delete from pups where id = $1', pupID)
    //   .then(function (result) {
    //     /* jshint ignore:start */
    //     res.status(200)
    //       .json({
    //         status: 'success',
    //         message: `Removed ${result.rowCount} puppy`
    //       });
    //     /* jshint ignore:end */
    //   })
    //   .catch(function (err) {
    //     return next(err);
    //   });
  }
  module.exports ={
      getAllPuppies:getAllPuppies,
      createPuppy: createPuppy,
      updatePuppy: updatePuppy,
      removePuppy: removePuppy
  }