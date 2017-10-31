// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(input_int('I2'))) == input_int('I3')) then (int(input_bool('B1')) !== int(bool(int(input_bool('B1'))))) else (int((if input_bool('B3') then str(len(input_string('S1'))) else str(bool(str(input_bool('B3')))))) === int(input_bool('B1'))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn43 = Function('x1', 'x6', 'b13', 'b35', 's34', "var b37 = b13; var e3 = \"var s2 = (x1).toString();s2\";var b7 = eval(\"Number(eval(e3))\"); var b8 = x6;var b9 = b13; var e11 = \"var e10 = \\\"b9\\\";eval(e10)\";var x12 = (eval(e11)) ? 1 : 0;var e15 = \"var x14 = ~~(b13);x14\";var e17 = \"!!(eval(e15))\";var e19 = \"Number(eval(e17))\";var b20 = false; if (x12 !== eval(e19)) { b20 = true; }var x42; if (b7 == b8) { x42 = b20; } else { function fn33(s23, b22) { var b27 = b22; var x32; if (b22) {  x32 = eval(\"var l24 = (s23).length;var s25 = (l24).toString();s25\"); } else { var s28 = (b27).toString();var e29 = \"s28\";var s31 = (Boolean(eval(e29))).toString(); x32 = s31; } return x32; } var x39 = (eval(\"b37\")) | 0;var b40 = false; if (Number(fn33(s34, b35)) === x39) { b40 = true; } x42 = b40; } return x42;");
fn43(input_I2, input_I3, input_B1, input_B3, input_S1);
