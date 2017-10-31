// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(not(bool(input_int('I2')))) && (str(int(str(not(not(input_bool('B1')))))) >= input_string('S2'))) then (input_int('I3') + input_int('I2')) else input_int('I3'))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn25(x18, x1, s13, b6) {
    var x20 = x1;
    var x23 = x18;
    var e3 = "var b2 = (x1) ? true : false;b2";
    var b4;
    if (eval(e3)) {
        b4 = false;
    } else {
        b4 = true;
    }
    var b5;
    if (b4) {
        b5 = false;
    } else {
        b5 = true;
    }
    var e10 = "var b7; if (b6) { b7 = false; } else { b7 = true; }var b8 = !(b7);var s9 = String(b8);s9";
    var s12 = '' + (parseInt(eval(e10), 10));
    var b14 = s12;
    var b15 = s13;
    var b16;
    if (b5 && b14 >= b15) {
        b16 = true;
    } else {
        b16 = false;
    }
    var e19 = "x18";
    x21 = eval(e19) + x20;
    var x24;
    if (b16) {
        x24 = x21;
    } else {
        x24 = x23;
    }
    return x24;
}
fn25(input_I3, input_I2, input_S2, input_B1);
