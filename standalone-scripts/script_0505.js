// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(input_int('I2'))) != (input_int('I2') + (input_int('I3') / input_int('I2')))) then len(str(len(input_string('S3')))) else int((str(input_int('I1')) != str(int(input_bool('B3'))))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn32 = Function('x23', 's17', 'b25', 'x5', 'x1', "var x4 = x1; var s2 = '' + (x1);var x3 = parseInt(s2, 10);var x6 = x4; x13 = x4; x14 = eval(\"var e8 = \\\"var e7 = \\\\\\\"x6\\\\\\\";eval(e7)\\\";x9 = x5; x10 = eval(e8);eval(\\\"x9 / x10\\\")\");var b15 = x3; var b16 = x13 + x14;var x31; if (b15 != b16) { var l22 = (eval(\"var e20 = \\\"var s19 = ((s17).length).toString();s19\\\";eval(e20)\")).length; x31 = l22; } else { var s24 = (x23).toString();var x26 = ~~(b25);var s27 = (x26).toString();var b28 = false; if (s24 != s27) { b28 = true; } x31 = ~~(b28); } return x31;");
fn32(input_I1, input_S3, input_B3, input_I3, input_I2);
