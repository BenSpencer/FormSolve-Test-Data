// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(str(int(bool(input_string('S3'))))) !== input_int('I1'))) then (int(not((input_int('I2') == 0))) in [190, 2, 1, 1, 63, 1, 38, 158]) else input_bool('B1'))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn23 = Function('b21', 'x7', 's1', 'x11', "var e3 = \"Boolean(s1)\";var s5 = (Number(eval(e3))).toString();var b8 = false; if (Number(s5) !== x7) { b8 = true; }var b10; if (b8) { b10 = false; } else { b10 = true; }var x22; if (b10) { var opts19 = [190, 2, 1, 1, 63, 1, 38, 158];var b18 = false; for (var idx20 = 0; idx20 < opts19.length; idx20++) { if (opts19[idx20] == eval(\"var e15 = \\\"!((x11 == 0))\\\";(eval(e15)) | 0\")) { b18 = true; } } x22 = b18; } else {  x22 = b21; } return x22;");
fn23(input_B1, input_I1, input_S3, input_I2);
