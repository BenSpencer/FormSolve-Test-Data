// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_int('I1')) != (not((str(input_int('I2')) > str((input_int('I2') % int(str(bool(input_int('I3')))))))) || input_bool('B1'))) then not(input_bool('B1')) else bool(input_string('S3')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn30 = Function('x7', 's24', 'x3', 'x1', 'b17', "var b22 = b17; var x6 = x3; var s5 = '' + (eval(\"x3\"));var b8 = !!(x7);x11 = x6; x12 = Number('' + (b8));var b18; if (!((s5 > (x11 % x12).toString())) || b17) { b18 = true; } else { b18 = false; }var b20 = false; if ((x1) ? true : false != b18) { b20 = true; }var x29; if (b20) { var b23 = !(b22); x29 = b23; } else {  x29 = eval(\"eval(\\\"(eval(\\\\\\\"s24\\\\\\\")) ? true : false\\\")\"); } return x29;");
fn30(input_I3, input_S3, input_I2, input_I1, input_B1);
