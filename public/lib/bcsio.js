// 
//  bcsio.js
//  bcs-integrated
//  
//  Created by Carson S. Christian on 2012-08-27.
//  Copyright 2012 (ampl)EGO. All rights reserved.
// 

var externalJS, externalJSloading;

//*****************************************************************************
// Global Structures.  These are availabe in most pages.  The comma separated
// files are read into these arrays.
// For full definitions, see:
// http://www.embeddedcc.com/wiki/index.php?title=Open_Interface_API#Open_Interface_Files_-_Structures
// ultemps  = ultemps.dat	//Updated every refresh, contains real time data
// sysnames = sysnames.dat	
// ucstates = ucstates.dat
// ulstates = ulstates.dat
// ucsysios = ucsysios.dat
// ulsysios = ulsysios.dat
// ulfloats = ulfloats.dat

/*
BCSio

(scoped)
*/
!function () {
	var BCSio = function () {};
	
	/*
	BCSio.tick
	
	Called on every tick of the BCS software.
	Time between ticks will vary, depending on network conditions
	and underlying BCS software. If timing is important, calculate
	it yourself.
	*/
	BCSio.prototype.tick = function () {
		// console.log('tick', Date.now(), this);
	};

	/*
	Register with device.
	*/
	var bcs;
	
	!function () {
		// tick notification
		externalJS = function () { bcs.tick.call(bcs); };
		// load complete
		externalJSloading = 0;
	}(bcs = new BCSio());
}();
