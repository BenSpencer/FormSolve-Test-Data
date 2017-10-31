// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(not(not(not(not((input_string('S2') !== input_string('S1'))))))) > input_string('S1')) then (if bool(str(input_int('I2'))) then input_bool('B2') else (int(input_bool('B1')) != input_int('I3'))) else (input_string('S3') in ['', '5Rus', 'ikQ', 'Gz']))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn31 = Function('b20', 's1', 's10', 'x14', 's26', 'x22', 'b19', "var s2 = s10; var b3 = s1 !== s2;var b8; if (!(!(!(b3)))) { b8 = false; } else { b8 = true; }var s9 = String(b8);var e11 = \"s10\";var b12 = s9 > eval(e11);var opts28 = ['', '5Rus', 'ikQ', 'Gz'];var b27 = false; for (var idx29 = 0; idx29 < opts28.length; idx29++) { if (opts28[idx29] == s26) { b27 = true; } }var x30; if (b12) { var b18 = Boolean(eval(\"var s15 = '' + (x14);eval(\\\"s15\\\")\"));var x25; if (b18) {  x25 = b19; } else { var b23; if (+(b20) != x22) { b23 = true; } else { b23 = false; } x25 = b23; } x30 = x25; } else { x30 = b27; } return x30;");
fn31(input_B1, input_S2, input_S1, input_I2, input_S3, input_I3, input_B2);
