// 
//  bcs.io.js
//  bcs-integrated
//  
//  Created by Carson S. Christian on 2012-10-29.
//  Copyright 2012 (ampl)EGO. All rights reserved.
// 

/*
Load all JS resources in order.
*/
!function () {
	var require = [
		'http://192.168.42.109:8080/socket.io/socket.io.js',
		'http://192.168.42.109:8080/lib/mootools.js',
		'http://192.168.42.109:8080/lib/bcsio.js'
	];
	
	var next = function () {
		if (require.length > 0) load(require.shift());
	};
	
	var load = function (url) {
		var script = document.createElement("script");
		
		script.type = "text/javascript";
		if (script.readyState) {
			// IE support
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") return script.onreadystatechange = null, next();
			};
		} else {
			// other browsers
			script.onload = function () {
				next();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
	
	next();
}();