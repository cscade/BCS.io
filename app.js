// 
//  app.js
//  bcs-integrated
//  
//  Created by Carson S. Christian on 2012-08-27.
//  Copyright 2012 (ampl)EGO. All rights reserved.
// 

var connect = require('connect'),
	app;

app = connect();

app
	.use(connect.static('public'))
	.listen(8080);