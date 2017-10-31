// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S1'))) then ((input_int('I2') * input_int('I2')) != int(((str(input_bool('B3')) > str(int((if input_bool('B2') then input_string('S2') else str(input_int('I3')))))) === input_bool('B2')))) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn17 = function (s13, x14, b12) {
    var x16;
    if (b12) {
        x16 = s13;
    } else {
        x16 = '' + (x14);
    }
    return x16;
}(function (x19, x5, b20, b10, s18, s1) {
    var b31 = b20;
    var e3 = "(s1).length";
    var b4 = Boolean(eval(e3));
    var x6 = x5;
    var e7 = "x6";
    x8 = x5;
    x9 = eval(e7);
    var b25 = b20;
    var s11 = '' + (b10);
    var x21 = parseInt(fn17(s18, x19, b20), 10);
    var b23 = s11 > (x21).toString();
    var b26;
    if (b23 === b25) {
        b26 = true;
    } else {
        b26 = false;
    }
    var x28 = (b26) | 0;
    var x32;
    if (b4) {
        x32 = (x8 * x9 != x28);
    } else {
        x32 = b31;
    }
    return x32;
})(input_I3, input_I2, input_B2, input_B3, input_S2, input_S1);
