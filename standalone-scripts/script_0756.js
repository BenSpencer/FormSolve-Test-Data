// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (len(str(not((if input_bool('B3') then (input_bool('B1') != bool(input_int('I2'))) else (bool(str(bool((input_int('I2') / int(input_string('S2')))))) == input_bool('B2')))))) in [0, 0, 0]) else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn35(s10, x4, b3, b1, b2) {
    var b20 = b1;
    var b33 = b3;
    var x34;
    if (b1) {
        var opts31 = [0, 0, 0];
        x34 = opts31.indexOf(eval("var l28 = (eval(\"var x8 = x4; var b22 = eval(\\\"var e15 = \\\\\\\"var e9 = \\\\\\\\\\\\\\\"x8\\\\\\\\\\\\\\\";Boolean((eval(e9) / Number(s10)))\\\\\\\";Boolean((eval(\\\\\\\"eval(e15)\\\\\\\")).toString())\\\"); var b23 = eval(\\\"b20\\\");var x24; if (b2) { var b5 = !!(x4);var b6; if (b3) { if (b5) { b6 = false; } else { b6 = true; } } else { if (b5) { b6 = true; } else { b6 = false; } } x24 = b6; } else { x24 = b22 == b23; }var b25 = !(x24);var s26 = String(b25);s26\")).length;l28")) > -1;
    } else {
        x34 = b33;
    }
    return x34;
}
fn35(input_S2, input_I2, input_B1, input_B2, input_B3);
