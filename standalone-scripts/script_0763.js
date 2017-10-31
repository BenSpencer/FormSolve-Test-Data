// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if false then input_string('S1') else str(int(str((int(str(len(input_string('S3')))) - int(bool(input_int('I1')))))))) else str(int((if (27 >= input_int('I2')) then input_string('S2') else str(input_bool('B2'))))))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn33 = Function('s25', 's19', 'x22', 'b1', 'x21', 's20', "var b26 = b1; var b23 = false; if (27 >= x22) { b23 = true; }var x28; if (b23) {  x28 = s25; } else { var s27 = String(b26); x28 = s27; }var x32; if (b1) { var fn18 = Function('s2', 's3', 'x7', \"var l4 = (s3).length;var x6 = parseInt('' + (l4), 10);var e9 = \\\"(x7) ? true : false\\\";x11 = x6 - (eval(e9)) ? 1 : 0;var s13 = '' + (x11);var e16 = \\\"'' + (parseInt(s13, 10))\\\";var x17; if (false) { x17 = s2; } else { x17 = eval(e16); } return x17;\");  x32 = fn18(s19, s20, x21); } else { x32 = '' + (Number(eval(\"x28\"))); } return x32;");
fn33(input_S2, input_S1, input_I2, input_B2, input_I1, input_S3);
