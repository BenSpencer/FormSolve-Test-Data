// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if not(input_bool('B1')) then (bool(int(input_bool('B1'))) !== ((input_string('S3') < str(input_int('I2'))) == input_bool('B1'))) else bool(str(input_bool('B3')))) && not(bool(int(input_string('S2'))))) then not((int((input_string('S1') > str(input_int('I1')))) == input_int('I3'))) else not(bool(input_int('I3'))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn49 = Function('b20', 'x41', 'x36', 'b1', 's8', 'x9', 's25', 's35', "var x45 = x41; var b14 = b1; var x23; if (!(b1)) { var b3 = b14; var e4 = \"b3\";var x5 = ~~(eval(e4));var b11 = s8; var b12 = String(x9);var e13 = \"b11 < b12\";var b15 = eval(e13) == b14;var e17 = \"b15\";var b18; if ((eval(\"x5\")) ? true : false !== eval(e17)) { b18 = true; } else { b18 = false; } x23 = b18; } else { var s21 = (b20).toString(); x23 = !!(s21); }var e31 = \"var e30 = \\\"var e26 = \\\\\\\"s25\\\\\\\";var b28 = !!(parseInt(eval(e26), 10));eval(\\\\\\\"b28\\\\\\\")\\\";eval(e30)\";var b32 = !(eval(e31));var b33; if (b32) { b33 = eval(\"x23\"); } else { b33 = false; }var x48; if (b33) { var s37 = (x36).toString();var b38 = s35 > s37;var b42 = false; if (Number(b38) == x41) { b42 = true; }var b44 = !(b42); x48 = b44; } else { x48 = !(!!(x45)); } return x48;");
fn49(input_B3, input_I3, input_I1, input_B1, input_S3, input_I2, input_S2, input_S1);
