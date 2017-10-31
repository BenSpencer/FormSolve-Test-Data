// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool((input_int('I1') - len(input_string('S1')))) then input_bool('B3') else (input_bool('B1') !== (not(((if true then 128 else len(input_string('S3'))) <= input_int('I3'))) == not(bool(int(str(input_bool('B3')))))))) then input_int('I2') else int(input_string('S3')))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn36 = Function('s2', 's10', 'b8', 'x32', 'x15', 'x1', 'b20', "var s33 = s10; var b7 = b20; x4 = x1 - (s2).length;var b6 = Boolean(x4);var x31; if (b6) {  x31 = b7; } else { var e30 = \"var e9 = \\\"b8\\\";var e19 = \\\"var x14; if (true) {  x14 = 128; } else { x14 = eval(\\\\\\\"(eval(\\\\\\\\\\\\\\\"s10\\\\\\\\\\\\\\\")).length\\\\\\\"); }var b16 = false; if (x14 <= x15) { b16 = true; }var b18; if (b16) { b18 = false; } else { b18 = true; }b18\\\";var x22 = Number((b20).toString());var b25 = !(!!(eval(\\\"x22\\\")));var b26 = eval(e19); var b27 = b25;var b28 = false; if (eval(e9) !== b26 == b27) { b28 = true; }b28\"; x31 = eval(e30); }var x34 = Number(s33); return (x31 ? x32 : x34);");
fn36(input_S1, input_S3, input_B1, input_I2, input_I3, input_I1, input_B3);
