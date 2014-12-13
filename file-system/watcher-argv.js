(function() {

	"use strict";

	const fs = require('fs'),
		  // argument vector for the command-line...
		  filename = process.argv[2];

    // a good way to check is through the argv...
    if (!filename) {
   		throw Error("A file to watch is required...");
    }

    fs.watch(filename, function() {
    	console.log("File " + filename + " changed..." );
    });

    console.log("Now watching " + filename + " for changes...");

}());