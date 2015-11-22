'use strict'

var print = function(msg){
    console.log(msg)
};

var Sinner = (function() {
    var pi, angToRad, inputToGrad, angleToRad, sin, exit, sinning;

    pi = Math.PI;
    angToRad = function (int) {
            return int * (pi / 180)
        }
        //inp form 0-24
        //out should be form 0-100
        //100 should be at 12
    sinning = function (input) {
        inputToGrad = (input * 360) / 24 - 90;
        angleToRad = angToRad(inputToGrad);
        sin = Math.sin(angleToRad);
        exit = sin > 0 ? sin : 0;
        return(exit * 99.99)
    };
    return {
        sinning: sinning
    }
})();

/*
var s = Sinner;
s.sinning(0.1)
s.sinning(1)
s.sinning(3)
s.sinning(6)
s.sinning(9)
s.sinning(12)
s.sinning(15)
s.sinning(18)
s.sinning(21)
s.sinning(23)
s.sinning(24)
*/