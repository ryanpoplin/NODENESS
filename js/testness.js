(function(nodeness) {

    "use strict";

    console.log(nodeness);

    x();

    var f = function f () {
        "use strict";
        console.log('testing...');
    };

    f();

    function x () {
        "use strict";
        console.log('testing again...');
    }



}('NODENESS...'));