'use strict';


(function(){
var light, color;

var i = 0, daytime = 0;

var msInADay = 24*60*60*1000;

var $container = $('#content');
$container.css({
    'background-color': 'white'
});

var changeBg = function(i, interval, light) {
    switch(true){
        case i<=360: color = `hsl(${i}, 100%, ${light}%)`; break;
    }


    $container.css({
        'background-color': color
    })
};

Dejector.deject(10, function(num){
    daytime = num;
    light = Sinner.sinning(daytime);
    light = light<20 ? 20 : light;
})

var iterate = function(fun, interval, end) {
    $container.css({
        'transition': 'background-color ' +interval +'ms'
    })
    var rotate = function() {
        i += 1;
        if (i > end) {
            i = 0;
        }
        fun(i, interval, light);

        setTimeout(rotate, interval)
    };

    rotate();

};



iterate((i,int, light) => {
    changeBg(i, int, light)
}, 1000, 360)

})();