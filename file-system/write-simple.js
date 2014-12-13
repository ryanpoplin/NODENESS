(function() {

	"use strict";

	const fs = require('fs');
	fs.writeFile('../text/text1.txt', 'a fucking message...', function(err) {
		if (err) {
			throw err;
		}
		console.log("File saved...");
	});

}());