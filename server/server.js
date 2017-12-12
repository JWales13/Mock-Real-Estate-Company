var express = require('express');
var bodyParser = require('body-parser');
var rental = require('./routes/rental');
var listing = require('./routes/listing');
require('./modules/mongoose.connection');


var app = express();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- DATABASE CONNECTION ---------- **/
 // module to spin up mongoose

/** ---------- EXPRESS ROUTES ---------- **/

app.use('/rental', rental);
app.use('/listing', listing)

/** ---------- START SERVER ---------- **/
var port = 5000;

app.listen(port, function() {
    console.log('Listening on port: ', port);
});