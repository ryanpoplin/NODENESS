(function() {

	"use strict";

	// 'process' === node.js global...
	const fs = require('fs'),
	      // .spawn just returns the spawn method/function from the child_process module...
		  spawn = require('child_process').spawn,
		  filename = process.argv[2];
    
    if (!filename) {
    	throw Error("A file to alter must be there...");
    }

    fs.watch(filename, function() {
    	let ls = spawn('ls', ['-lh', filename]),
    	    output = '';
    	// stdout, stdin, stderr === streams...
    	ls.stdout.on('data', function(chunk) {
    		output += chunk.toString();
    		console.log(output);
    	});
    	ls.on('close', function() {
    		// regexp...
    		let parts = output.split(/\s+/);
    		console.dir([parts[0], parts[4], parts[8]]);
    	});
    });

    console.log("Now watching " + filename + " for changes...");

}());