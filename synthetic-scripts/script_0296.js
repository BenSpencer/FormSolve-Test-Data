// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_string('S2') else str(((input_int('I2') !== len(str((if not(input_bool('B2')) then input_bool('B2') else input_bool('B3'))))) != (int(str(int(str(((len(str(input_bool('B1'))) % input_int('I2')) + input_int('I3')))))) !== int(input_string('S2'))))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn41(b10, x20, b4, s2, x23, b1) {
    var b16 = b1;
    var s31 = s2;
    var x40;
    if (b1) {
        x40 = s2;
    } else {
        x40 = eval("var e38 = \"var x3 = x20; var b7 = b4; var e5 = \\\"b4\\\";var b6; if (eval(e5)) { b6 = false; } else { b6 = true; }var x11; if (b6) {  x11 = eval(\\\"var e8 = \\\\\\\"b7\\\\\\\";eval(e8)\\\"); } else {  x11 = b10; }var l13 = ((x11).toString()).length;var b14 = x3; var b15 = l13;x24 = ((eval(\\\"(b16).toString()\\\")).length % x20); x25 = x23;var s26 = '' + (x24 + x25);var e29 = \\\"String(Number(s26))\\\";var x32 = Number(s31);var b33 = parseInt(eval(e29), 10) !== x32;String((b14 !== b15 != b33))\";eval(e38)");
    }
    return x40;
}
fn41(input_B3, input_I2, input_B2, input_S2, input_I3, input_B1);
