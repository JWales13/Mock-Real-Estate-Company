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




module.exports = router;