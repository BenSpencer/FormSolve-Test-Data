// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') == bool(len(input_string('S2')))) then (if (bool(input_string('S2')) !== not(not(not(bool(int(str(not(input_bool('B2'))))))))) then len(input_string('S1')) else int(input_string('S3'))) else input_int('I2'))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn32 = function (x30, s2, b1, s22, s24) {
    var s8 = s2;
    var b10 = b1;
    var b6 = b1 == Boolean((eval("s2")).length);
    var b9 = Boolean(s8);
    var s14 = String(eval("var b12; if (eval(\"b10\")) { b12 = false; } else { b12 = true; }b12"));
    var x15 = Number(s14);
    var b16 = !! (x15);
    var b17 = !(b16);
    var b19 = !(!(b17));
    var b20 = false;
    if (b9 !== b19) {
        b20 = true;
    }
    return (b6 ? (b20 ? (s22).length : eval("var e27 = \"var e25 = \\\"s24\\\";parseInt(eval(e25), 10)\";eval(e27)")) : x30);
}
fn32(input_I2, input_S2, input_B2, input_S1, input_S3);
