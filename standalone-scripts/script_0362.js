// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B3') then bool(len(str(input_bool('B3')))) else regex-test(input_string('S2'), /^a(g[-_ ]+|E)*$/)) then bool((input_int('I1') * input_int('I1'))) else (bool(str(bool(int(bool(str(input_int('I1'))))))) && ((int(input_bool('B2')) * (int(bool(int(str((if (input_string('S3') > str(((input_int('I2') + int(input_bool('B3'))) < input_int('I1')))) then input_int('I2') else int(regex-test(str((89 != input_int('I3'))), /^(jH[-_ ]Xz|L)*$/))))))) / 6)) > int(bool(input_int('I3'))))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn65 = Function('x41', 's25', 'x26', 'b23', 'b1', 's7', 'x10', "var x15 = x10; var b27 = b1; var b2 = b1; var x9; if (b1) {  x9 = Boolean((eval(\"String(b2)\")).length); } else { x9 = (s7).match(/^a(g[-_ ]+|E)*$/) !== null; }var x11 = x10; x12 = x10; x13 = x11;var x64; if (x9) { x64 = !!(x12 * x13); } else { var x34 = x15; var x56 = x41; var x40 = x26; var s37 = ((eval(\"var e28 = \\\"b27\\\";var x29 = Number(eval(e28));var e32 = \\\"(x26 + x29)\\\";eval(e32)\") < x34)).toString();var b38 = false; if (s25 > s37) { b38 = true; }var b42 = 89; var b43 = x41;var x46 = ((String(b42 != b43)).match(/^(jH[-_ ]Xz|L)*$/) !== null) ? 1 : 0;var x47; if (b38) {  x47 = x40; } else { x47 = x46; }var x49 = parseInt('' + (x47), 10);var x51 = (!!(x49)) ? 1 : 0;x54 = Number(b23); x55 = (x51 / 6);var e58 = \"(x56) ? true : false\";var b60; if (x54 * x55 > Number(eval(e58))) { b60 = true; } else { b60 = false; }var b62 = Boolean(eval(\"String(!!((Boolean((x15).toString())) | 0))\")); var b63 = b60; x64 = b62 && b63; } return x64;");
fn65(input_I3, input_S3, input_I2, input_B2, input_B3, input_S2, input_I1);
