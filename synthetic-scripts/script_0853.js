// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then bool(input_string('S2')) else bool(str(int(bool((len(str((str(input_int('I2')) !== (if input_bool('B1') then str(bool(len(str(input_bool('B2'))))) else str(input_int('I2')))))) % 6))))))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn34(x15, s2, b10, b1) {
    var b7 = b1;
    var b3 = (s2) ? true : false;
    var x33;
    if (b1) {
        x33 = b3;
    } else {
        var e29 = "x26 = ((eval(\"var x4 = x15; var e5 = \\\"x4\\\";var l12 = ('' + (b10)).length;var b13 = (l12) ? true : false;var e17 = \\\"eval(\\\\\\\"x15\\\\\\\")\\\";var e18 = \\\"eval(e17)\\\";var b21 = '' + (eval(e5)); var b22 = (eval(\\\"eval(\\\\\\\"b7\\\\\\\")\\\") ? '' + (b13) : String(eval(e18)));b21 !== b22\")).toString()).length; x27 = 6;var b28 = Boolean(x26 % x27);b28";
        x33 = (String((eval(e29)) ? 1 : 0)) ? true : false;
    }
    return x33;
}
fn34(input_I2, input_S2, input_B2, input_B1);
