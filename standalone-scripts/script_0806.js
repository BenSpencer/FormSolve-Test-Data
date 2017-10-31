// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not((str(bool(len(str(input_bool('B3'))))) != input_string('S3')))) in [0, 88, 10, 0]) then input_bool('B2') else (input_int('I2') > 1))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn26 = Function('b21', 'b1', 's8', 'x22', "var e14 = \"eval(\\\"eval(\\\\\\\"!((String(eval(\\\\\\\\\\\\\\\"var e5 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var s2 = '' + (b1);Boolean((s2).length)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";eval(e5)\\\\\\\\\\\\\\\")) != s8))\\\\\\\")\\\")\";var e16 = \"eval(\\\"eval(e14)\\\")\";var opts19 = [0, 88, 10, 0];var b18 = false; for (var idx20 = 0; idx20 < opts19.length; idx20++) { if (opts19[idx20] == (eval(e16)) | 0) { b18 = true; } }var b23 = false; if (x22 > 1) { b23 = true; }var x25; if (b18) {  x25 = b21; } else { x25 = b23; } return x25;");
fn26(input_B2, input_B3, input_S3, input_I2);
