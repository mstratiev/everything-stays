'use strict'

var print = function(msg){
    console.log(msg)
};
var radnom = function (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
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
