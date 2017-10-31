// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') > input_string('S3')) then (((input_bool('B1') != bool(input_string('S1'))) !== input_bool('B2')) || (if input_bool('B3') then input_bool('B3') else not(bool(str(len(input_string('S3'))))))) else (bool(len(input_string('S3'))) || not(((len(str((if input_bool('B2') then bool(input_int('I2')) else bool(input_string('S3'))))) / input_int('I3')) === input_int('I1')))))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn48 = Function('x35', 'b14', 's16', 'b11', 's1', 'x28', 'b5', 's6', 'x39', "var s2 = s16; var s24 = s16; var b27 = b11; var b3; if (s1 > s2) { b3 = true; } else { b3 = false; }var e7 = \"s6\";var b8 = !!(eval(e7));var b9 = false; if (b5 != b8) { b9 = true; }var b15 = b14; var b20; if (!!(String((s16).length))) { b20 = false; } else { b20 = true; }var b22 = false; if ((b9 !== b11) || (b14 ? b15 : b20)) { b22 = true; }var s30 = s24; var b29 = (x28) ? true : false;var l34 = (String((b27 ? b29 : !!(s30)))).length;var e36 = \"x35\";var e40 = \"x39\";var b41; if ((l34 / eval(e36)) === eval(e40)) { b41 = true; } else { b41 = false; }var b43 = !(b41);var b44; if (b43) { b44 = true; } else {  b44 = ((s24).length) ? true : false; }var x47; if (b3) { x47 = b22; } else { x47 = eval(\"b44\"); } return x47;");
fn48(input_I3, input_B3, input_S3, input_B2, input_S2, input_I2, input_B1, input_S1, input_I1);
