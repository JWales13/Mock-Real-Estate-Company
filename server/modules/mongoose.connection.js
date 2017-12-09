function connect() {
    var mongoose = require('mongoose');
    var databaseURL = 'mongodb://localhost:27017/realestate';

    mongoose.connect(databaseURL);
  
    
    mongoose.connection.on('connected', function(){
        console.log('mongoose connected to : ', databaseURL)
    })
    
    mongoose.connection.on('error', function(error){
        console.log('mongoose connection error : ', error)
    })
}

module.exports = {
    connect: connect
}