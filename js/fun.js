(function() {

	"use strict"

	// some funky looking JS...

	if ({}) console.log(hoister())

	function hoister () {

		return 'This function hoists...'
	
	}

}())