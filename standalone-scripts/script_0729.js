// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_int('I2'))) then (if input_bool('B3') then (not(bool(int(not(not(bool(input_string('S1'))))))) || (input_int('I1') in [6, 45, 1, 10, 1])) else (input_string('S2') < str(input_int('I3')))) else ((input_bool('B1') && (str(bool(input_int('I2'))) <= input_string('S3'))) !== bool(input_int('I3'))))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn45 = Function('s33', 's21', 'x1', 's7', 'x14', 'b5', 'b28', 'x23', "var x29 = x1; var x39 = x23; var x44; if (Boolean(eval(\"String(x1)\"))) { var x27; if (eval(\"b5\")) { var b8 = !!(s7);var b9 = !(b8);var b10; if (b9) { b10 = false; } else { b10 = true; }var x11 = (b10) | 0;var b12 = Boolean(x11);var b13 = !(b12);var e15 = \"x14\";var opts17 = [6, 45, 1, 10, 1];var b19 = false; if (b13 || opts17.indexOf(eval(e15)) > -1) { b19 = true; } x27 = b19; } else { var s24 = (x23).toString(); x27 = (eval(\"s21\") < s24); } x44 = x27; } else { x44 = eval(\"var b37 = b28; var b38 = eval(\\\"var e32 = \\\\\\\"var s31 = '' + (!!(x29));s31\\\\\\\";var b34 = eval(e32) <= s33;b34\\\");var b40 = !!(x39);var b41 = b37 && b38 !== b40;b41\"); } return x44;");
fn45(input_S3, input_S2, input_I2, input_S1, input_I1, input_B3, input_B1, input_I3);
