// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then not(((if (if bool(str(bool(int(input_string('S1'))))) then bool(input_int('I2')) else input_bool('B1')) then int(input_string('S3')) else len(str(bool(input_int('I1'))))) == input_int('I3'))) else bool(input_int('I3')))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn30(b10, s1, x14, x22, s12, x8) {
    var x27 = x22;
    var x29;
    if (true) {
        var e21 = "eval(\"var s5 = String((eval(\\\"var x2 = parseInt(s1, 10);x2\\\")) ? true : false);var x11; if (eval(\\\"Boolean(s5)\\\")) { x11 = Boolean(x8); } else {  x11 = b10; }var e18 = \\\"var s16 = '' + (!!(x14));var l17 = (s16).length;l17\\\";(x11 ? Number(s12) : eval(e18))\")";
        var b25;
        if ((eval(e21) == x22)) {
            b25 = false;
        } else {
            b25 = true;
        }
        var e26 = "b25";
        x29 = eval(e26);
    } else {
        x29 = (x27) ? true : false;
    }
    return x29;
}
fn30(input_B1, input_S1, input_I1, input_I3, input_S3, input_I2);
