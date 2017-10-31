// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if bool(str(bool(str(not(bool((if input_bool('B3') then str((input_int('I2') !== input_int('I3'))) else input_string('S1')))))))) then str(input_int('I1')) else input_string('S3')) else input_string('S3'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn22 = Function('s18', 'b1', 'x3', 'x16', 's8', 'x4', 'b2', "var s20 = s18; var b5 = x3 !== x4;var x9; if (b2) { x9 = (b5).toString(); } else {  x9 = s8; }var b11 = !(Boolean(x9));var b13 = !!((b11).toString());var s14 = String(b13); return (b1 ? (Boolean(s14) ? (x16).toString() : s18) : s20);");
fn22(input_S3, input_B1, input_I2, input_I1, input_S1, input_I3, input_B3);
