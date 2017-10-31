// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str(input_int('I3'))) >= int((input_int('I2') >= input_int('I2')))) then true else bool(str((bool(input_int('I2')) || bool(len(input_string('S3')))))))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn24 = Function('x13', 'x1', 's16', "var x6 = x13; var x7 = x6; var b8 = false; if (x6 >= x7) { b8 = true; }var x10 = (b8) | 0;var b11 = (eval(\"eval(\\\"'' + (x1)\\\")\")).length >= x10;var x23; if (b11) { x23 = true; } else { var l17 = (s16).length;var b19; if (!!(l17)) { b19 = true; } else { var e14 = \"x13\";var b15 = (eval(e14)) ? true : false; b19 = b15; }var s21 = String(b19); x23 = !!(s21); } return x23;");
fn24(input_I2, input_I3, input_S3);
