// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str((int(not(bool((int(input_bool('B3')) / int(not(bool(input_string('S3')))))))) / int(bool(int(str(int(not(bool(input_string('S3')))))))))))) then bool(input_int('I2')) else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn32 = Function('b1', 'b30', 's12', 'x28', "var e25 = \"var s3 = s12; var b10; if (!!((~~(b1) / (!(!!(s3))) | 0))) { b10 = false; } else { b10 = true; }var x16 = ~~(!(eval(\\\"!!(s12)\\\")));var e20 = \\\"Boolean(Number(String(x16)))\\\";var x21 = (eval(e20)) | 0;x22 = +(b10); x23 = x21;var s24 = String(x22 / x23);s24\";var b27 = !!(parseInt(eval(e25), 10));var b29 = !!(x28);var x31; if (b27) { x31 = b29; } else {  x31 = b30; } return x31;");
fn32(input_B3, input_B1, input_S3, input_I2);
