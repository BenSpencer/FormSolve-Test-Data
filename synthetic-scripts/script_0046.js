// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int(bool(len(input_string('S3')))))) then (if not(input_bool('B1')) then false else bool(input_int('I2'))) else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn18 = Function('x11', 's1', 'b14', "var b9 = b14; var e7 = \"eval(\\\"var l2 = (s1).length;var s5 = String((Boolean(l2)) | 0);s5\\\")\";var x17; if (!!(eval(e7))) { var b10 = !(b9); x17 = (b10 ? false : (x11) ? true : false); } else { var e16 = \"var e15 = \\\"b14\\\";eval(e15)\"; x17 = eval(e16); } return x17;");
fn18(input_I2, input_S3, input_B1);
