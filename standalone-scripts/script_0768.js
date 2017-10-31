// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((str(input_bool('B1')) <= input_string('S2')) !== (int(bool(input_string('S2'))) != (if not((bool(input_int('I2')) != input_bool('B1'))) then input_int('I2') else int(input_string('S2')))))) then input_string('S1') else str(input_int('I1')))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn32 = function (x29, x10, b1, s18, s28) {
    var s4 = s18;
    var b13 = b1;
    var e3 = "'' + (b1)";
    var b5 = eval(e3);
    var b6 = s4;
    var s7 = s18;
    var b8 = !! (s7);
    var x17 = x10;
    var e12 = "!!(x10)";
    var b14 = eval(e12) != b13;
    var b16;
    if (b14) {
        b16 = false;
    } else {
        b16 = true;
    }
    var e19 = "s18";
    var b22;
    if ((b8) ? 1 : 0 != (b16 ? x17 : Number(eval(e19)))) {
        b22 = true;
    } else {
        b22 = false;
    }
    var b24 = b5 <= b6 !== b22;
    var b26;
    if (b24) {
        b26 = false;
    } else {
        b26 = true;
    }
    var e27 = "b26";
    var x31;
    if (eval(e27)) {
        x31 = s28;
    } else {
        x31 = '' + (x29);
    }
    return x31;
}
fn32(input_I1, input_I2, input_B1, input_S2, input_S1);
