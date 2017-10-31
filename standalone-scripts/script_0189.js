// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool((if not(not((str(input_int('I3')) !== str(input_int('I1'))))) then len(str(not(input_bool('B1')))) else int(input_bool('B3')))) && input_bool('B1')) then str((input_int('I2') !== input_int('I1'))) else str(int(input_bool('B3'))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn33 = function (x1, x22, b17, x24, b13) {
    var x3 = x24;
    var b29 = b13;
    var x30 = Number(b29);
    var x32;
    if (eval("var b9 = b17; var s4 = '' + (x3);var b5 = String(x1); var b6 = s4;var x14 = +(b13);var x15; if (!(!(b5 !== b6))) {  x15 = ('' + (!(b9))).length; } else { x15 = x14; }var b16 = !!(x15);var e18 = \"b17\";(b16 && eval(e18))")) {
        var e23 = "x22";
        var b25;
        if (eval(e23) !== x24) {
            b25 = true;
        } else {
            b25 = false;
        }
        var s27 = String(b25);
        x32 = eval("s27");
    } else {
        x32 = '' + (x30);
    }
    return x32;
}
fn33(input_I3, input_I2, input_B1, input_I1, input_B3);
