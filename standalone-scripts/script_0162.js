// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(bool(str(((if not(bool(int(bool(str(bool(int((int((int(input_bool('B2')) === input_int('I2'))) <= len(str(input_int('I1'))))))))))) then input_int('I3') else int((if input_bool('B2') then bool(input_string('S3')) else input_bool('B3')))) + int(not((input_int('I2') in [-70, 6, 0])))))))) then input_int('I2') else input_int('I3'))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn48 = function (x3, b25, x21, x7, b1, s23) {
    var x45 = x3;
    var x46 = x21;
    var e43 = "var x31 = x3; var b22 = b1; var s16 = (!!(eval(\"eval(\\\"var b4 = (b1) ? 1 : 0 === x3;var s8 = (x7).toString();var l9 = (s8).length;var b10 = (b4) | 0 <= l9;Number(b10)\\\")\"))).toString();var b17 = !!(s16);var x18 = Number(b17);var b24 = (s23) ? true : false;var x29 = Number(eval(\"(b22 ? b24 : eval(\\\"b25\\\"))\"));var x30; if (!(!!(x18))) {  x30 = x21; } else { x30 = x29; }var opts34 = [-70, 6, 0];var b33 = false; for (var idx35 = 0; idx35 < opts34.length; idx35++) { if (opts34[idx35] == eval(\"x31\")) { b33 = true; } }x38 = x30 + Number(!(b33));var s42 = '' + (('' + (x38)) ? true : false);s42";
    var b44 = Boolean(eval(e43));
    var x47;
    if (b44) {
        x47 = x45;
    } else {
        x47 = x46;
    }
    return x47;
}
fn48(input_I2, input_B3, input_I3, input_I1, input_B2, input_S3);
