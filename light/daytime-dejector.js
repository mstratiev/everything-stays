'use strict';


var Dejector = (function() {
    var date, hours, minutes;
    var self = this;
    var minutes = function(min) {
        return min * 60 * 100
    }

    var dating = function() {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        return hours + (minutes / 60)

    }

    var deject = function(interval) {
  
        var rotate = function() {


            setTimeout(rotate, minutes(interval))
        }

    }



    return {
        deject: deject,
        dating: dating
    }
})();

console.log(Dejector.dating())
