'use strict';


var Dejector = (function() {
    var date, hours, minutes, whatIActuallNeed;
    var self = this;
    var minutize = function(min) {
        return min * 60 * 1000
    }

    var dating = function() {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        return hours + (minutes / 60)

    }

    var deject = function(interval, callback) {

        var rotate = function() {
    		whatIActuallNeed = dating();
            setTimeout(rotate, minutize(interval));
            callback(whatIActuallNeed)
        }
        rotate();

    }



    return {
        deject: deject,
        dating: dating
    }
})();

