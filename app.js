// 
//  app.js
//  bcs-integrated
//  
//  Created by Carson S. Christian on 2012-08-27.
//  Copyright 2012 (ampl)EGO. All rights reserved.
// 

var express = require('express'),
	app = express(),
	path = require('path'),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(8080);

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});