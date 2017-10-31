// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') !== bool((if (if (input_int('I1') <= len(str(bool(input_string('S2'))))) then (input_int('I1') in [1, 3, 6, 36, -100, 1, 1, 8, 0]) else (if regex-test(str(int(str(input_int('I2')))), /^[-_ ](w|v)+oV$/) then input_bool('B3') else bool(input_int('I3')))) then int(not(input_bool('B2'))) else input_int('I3')))) then input_bool('B1') else bool(input_int('I1')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn40 = Function('x16', 's3', 'b36', 'b1', 'x23', 'b22', 'x12', "var x37 = x12; var b27 = b1; var x31 = x23; var x2 = x12; var b10 = false; if (x2 <= (eval(\"var e4 = \\\"s3\\\";var s7 = (!!(eval(\\\"eval(e4)\\\"))).toString();s7\")).length) { b10 = true; }var x26; if (b10) { var opts14 = [1, 3, 6, 36, -100, 1, 1, 8, 0];var b13 = false; for (var idx15 = 0; idx15 < opts14.length; idx15++) { if (opts14[idx15] == x12) { b13 = true; } } x26 = b13; } else { var x18 = Number((x16).toString());var e20 = \"'' + (x18)\";var x25; if ((eval(e20)).match(/^[-_ ](w|v)+oV$/) !== null) {  x25 = b22; } else {  x25 = !!(x23); } x26 = x25; }var b28; if (b27) { b28 = false; } else { b28 = true; }var x29 = (b28) | 0;var e30 = \"x29\";var x32; if (x26) { x32 = eval(e30); } else { x32 = x31; }var x39; if ((b1 !== (x32) ? true : false)) {  x39 = b36; } else { var b38 = !!(x37); x39 = b38; } return x39;");
fn40(input_I2, input_S2, input_B1, input_B2, input_I3, input_B3, input_I1);
