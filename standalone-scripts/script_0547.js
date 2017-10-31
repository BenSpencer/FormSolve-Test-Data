// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((int(not(input_bool('B2'))) != int((if true then (input_bool('B3') && (not(not(not(input_bool('B1')))) && input_bool('B2'))) else input_bool('B1')))))) then int(str(input_int('I2'))) else int(regex-test(str(input_bool('B1')), /^(Xo.*[0-9]JOv\W|N)$/)))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn32 = Function('b1', 'b4', 'x23', 'b14', "var b26 = b14; var e22 = \"var b9 = b1; var b2; if (b1) { b2 = false; } else { b2 = true; }var b5 = b14; var b6 = !(b5);var b7 = !(b6);var b10 = !(b7); var b11 = b9;var b12; if (b4 && b10 && b11) { b12 = true; } else { b12 = false; }var x15; if (true) { x15 = b12; } else {  x15 = b14; }var b18 = false; if ((b2) ? 1 : 0 != eval(\\\"(x15) | 0\\\")) { b18 = true; }var b20; if (b18) { b20 = false; } else { b20 = true; }var b21 = !(b20);b21\";var s24 = '' + (x23);var x31; if (eval(e22)) { x31 = Number(s24); } else { var e28 = \"String(b26)\";var x30 = ~~((eval(e28)).match(/^(Xo.*[0-9]JOv\\W|N)$/) !== null); x31 = x30; } return x31;");
fn32(input_B2, input_B3, input_I2, input_B1);
