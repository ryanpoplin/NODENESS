(function() {

    "use strict";

    var EventEmitter = require('events').EventEmitter;
    console.log(EventEmitter);

    /*var Counter = function(init) {

        this.increment = function() {

            init++;

            this.emit('incremented', init);

        };

    };

    Counter.prototype = new EventEmitter();

    var counter = new Counter(24);

    var callback = function() {

        console.log(count);

    };

    counter.addListener('incremented', callback);

    counter.increment();

    counter.increment();*/

}());