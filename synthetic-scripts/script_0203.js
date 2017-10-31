// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(str(bool((len((if input_bool('B1') then input_string('S1') else str(int(input_bool('B1'))))) - input_int('I2'))))))) then input_bool('B1') else bool((int(input_string('S3')) / len(str(input_bool('B3'))))))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn33 = Function('b1', 's23', 'x12', 'b26', 's3', "var b22 = b1; var x32; if (Boolean('' + (eval(\"x14 = eval(\\\"var b4 = b1; var x8; if (eval(\\\\\\\"b1\\\\\\\")) { x8 = s3; } else { var e5 = \\\\\\\"b4\\\\\\\";var s7 = String((eval(e5)) ? 1 : 0); x8 = s7; }eval(\\\\\\\"(x8).length\\\\\\\")\\\") - eval(\\\"x12\\\");var b16 = (x14) ? true : false;('' + (b16)).length\")))) {  x32 = b22; } else { var e24 = \"s23\";var x25 = parseInt(eval(e24), 10);x29 = x25; x30 = ('' + (b26)).length; x32 = !!(x29 / x30); } return x32;");
fn33(input_B1, input_S3, input_I2, input_B3, input_S1);
