(function() {
	
	"use strict";

	// return a sweet file-system object...
	const fs = require('fs');
	fs.watch('../text/text1.txt', function() {
		console.log("File 'text1.txt' just fucking altered...");
	});

	console.log("Watching 'text1.txt' for alterations...");

}());