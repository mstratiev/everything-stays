'use strict'

var print = (msg) => {
    console.log(msg)
};

var doTimer = function(length, resolution, oninstance, oncomplete) {
	var window = window || global;
    oninstance = typeof oninstance =='function' ? oninstance : (_, count) => {print(count)};
    oncomplete = typeof oncomplete =='function' ? oncomplete : () => {};

    //lengt, resolution is iteration durign the lenght
    var steps = (length / 100) * (resolution / 10),
        speed = length / steps,
        count = 0,
        start = new Date().getTime();

    function instance() {
        if (count++ == steps) {
            oncomplete(steps, count);
        } else {
            oninstance(steps, count);

            var diff = (new Date().getTime() - start) - (count * speed);
            window.setTimeout(instance, (speed - diff));
        }
    }

    window.setTimeout(instance, speed);
}

doTimer(1000, 2,null, null)