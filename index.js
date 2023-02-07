const express = require('express');
const path = require('path');

require('dotenv').config();
var port = process.env.PORT || 3000

const app = express();

const publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor British corriendo en el puerto ', port);
});