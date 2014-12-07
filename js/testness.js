(function() {

    "use strict";

//    var TestEventEmitter = require('events');
//    console.log(TestEventEmitter);

    var EventEmitter = require('events').EventEmitter;
    console.log(EventEmitter);

    var Counter = function(init) {

//        this.testAttr = 'JavaScript is funny...';
//
//        var testAttr = 'JavaScript is not funny...';

        this.increment = function() {

            init++;

            this.emit('incremented', init);

        };

    };

    Counter.prototype = new EventEmitter();

    var counter = new Counter(24);

    var callback = function(count) {

        console.log(count);

    };

    counter.addListener('incremented', callback);

    counter.increment();

    counter.increment();

}());