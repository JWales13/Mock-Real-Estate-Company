var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema');

router.get('/', function(req, res){
    // a get request for all games
    Rental.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});


router.post('/', function(req, res){
    // a get request for all games
    var addProperty = new Rental(req.body);

    addProperty.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.delete('/:id', function(req,res){
    Rental.remove({ _id: req.params.id  }, function(errorMakingDatabaseQuery, result) {
        if (errorMakingDatabaseQuery) {
            console.log('error with game save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log('result', result);
            res.sendStatus(200);
        }
    })
});





module.exports = router;