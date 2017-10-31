// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(str((if bool(str(int(str((if false then input_int('I2') else input_int('I3')))))) then not(not(bool((int(str(bool(input_int('I1')))) - int(input_bool('B3')))))) else input_bool('B3'))))) then 6 else input_int('I1'))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn28 = Function('x2', 'x26', 'b12', 'x1', "var x8 = x26; var b21 = b12; var x3; if (false) { x3 = x1; } else { x3 = x2; }var s4 = String(x3);var x22; if (Boolean(String(Number(s4)))) { var e19 = \"var b9 = !!(x8);var x11 = parseInt((b9).toString(), 10);x14 = x11 - ~~(b12);var e18 = \\\"!(!!(x14))\\\";eval(e18)\";var b20 = !(eval(e19)); x22 = b20; } else { x22 = b21; }var s23 = '' + (x22);var b25 = ((s23).length) ? true : false; return (b25 ? 6 : x26);");
fn28(input_I3, input_I1, input_B3, input_I2);
