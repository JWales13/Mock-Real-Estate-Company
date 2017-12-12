var mongoose = require('mongoose');
var dbPath = 'mongodb://localhost:27017/realestate';

 
  
    
    mongoose.connection.on('connected', function(){
        console.log('mongoose connected')
    })
    
    mongoose.connection.on('error', function(error){
        console.log('mongoose connection error : ')
    })

mongoose.connect(dbPath)
module.exports = 
    mongoose
