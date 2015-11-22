'use strict'

var print = function(msg) {
    console.log(msg)
};


var $container = $('#content');
$container.css({
    'background-color': 'white'
});
var color = '';
var changeBg = function(i, interval, daytime) {

    switch(true){
        case i<=360: color = `hsl(${i}, 100%, 90%)`; break;
    }


    $container.css({
        'background-color': color
    })
};


var i = 0, daytime = 0;

var msInADay = 24*60*60*1000;

var iterate = function(fun, interval, end) {
    $container.css({
        'transition': 'background-color ' +interval +'ms'
    })
    var rotate = function() {
        daytime += (interval / msInADay);
        i += 1;
        if (i > end) {
            i = 0;
        }
        fun(i, interval, daytime);

        setTimeout(rotate, interval)
    };

   // rotate();

};

iterate((i,int, day) => {
    changeBg(i, int, day)
}, 100, 360)
