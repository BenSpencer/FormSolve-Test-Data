// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if true then not(not((if bool(input_int('I1')) then input_bool('B2') else (input_int('I3') !== int(input_string('S2')))))) else input_bool('B1')) then int(bool(input_string('S3'))) else input_int('I2'))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn26 = Function('x24', 'b18', 'x16', 'b19', 's15', 'x17', 's20', "function fn14(s5, x4, x1, b3, b12) { var x9; if (Boolean(x1)) { x9 = b3; } else { x9 = (x4 !== Number(s5)); }var b11 = !(!(x9)); return (true ? b11 : b12); } var x25; if (fn14(s15, x16, x17, b18, b19)) { var e21 = \"s20\";var b22 = !!(eval(e21));var x23 = +(b22); x25 = x23; } else { x25 = x24; } return x25;");
fn26(input_I2, input_B2, input_I3, input_B1, input_S2, input_I1, input_S3);
