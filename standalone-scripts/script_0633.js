// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then str(bool(str(input_int('I3')))) else str(bool(str((((if (int(input_string('S2')) !== input_int('I2')) then input_string('S2') else input_string('S1')) !== input_string('S3')) || (len(input_string('S2')) == int(input_string('S1'))))))))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn33 = Function('b1', 's16', 'x9', 'x2', 's14', 's13', "var e6 = \"'' + (!!('' + (x2)))\";var s20 = s13; var s23 = s14; var s7 = s13; var x8 = parseInt(s7, 10);var x15; if ((x8 !== eval(\"x9\"))) { x15 = s13; } else {  x15 = s14; }var e17 = \"s16\";var b18 = x15; var b19 = eval(e17);var b27; if (b18 !== b19) { b27 = true; } else { var e21 = \"s20\";var l22 = (eval(e21)).length;var x24 = parseInt(s23, 10);var b25 = l22; var b26 = x24; b27 = b25 == b26; }var b30 = !!('' + (b27));var s31 = '' + (b30); return (b1 ? eval(e6) : s31);");
fn33(input_B1, input_S3, input_I2, input_I3, input_S1, input_S2);
