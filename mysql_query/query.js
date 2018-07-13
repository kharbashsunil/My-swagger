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

    // db.any('select * from pups')
    //   .then(function (data) {
    //     res.status(200)
    //       .json({
    //         status: 'success',
    //         data: data,
    //         message: 'Retrieved ALL puppies'
    //       });
    //   })
    //   .catch(function (err) {
    //     return next(err);
    //   });
  }

  module.exports ={
      getAllPuppies:getAllPuppies
  }