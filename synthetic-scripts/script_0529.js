// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then ((input_bool('B3') != (int(str((true !== (if regex-test(input_string('S3'), /^(S[-_ ]uw|O)+$/) then input_bool('B3') else bool((int(input_string('S1')) / input_int('I2'))))))) < int(input_bool('B1')))) || (regex-test(input_string('S1'), /^(l|F[a-z]*)$/) && not(bool(input_int('I1'))))) else bool(int(bool(input_int('I2')))))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn46 = function (b14, b22, x31, x16, b1, s15, s17) {
    var x41 = x16;
    var x43 = ((x41) ? true : false) | 0;
    var x45;
    if (b1) {
        x45 = eval("eval(\"var s29 = s15; var b2 = b14; var fn13 = function(b5, s6, x8, s3) { var re4 = new RegExp(\\\"^(S[-_ ]uw|O)+$\\\");var x12; if (re4.test(s3)) { x12 = b5; } else { x9 = parseInt(s6, 10); x10 = x8; x12 = Boolean(x9 / x10); } return x12; } var b18; if (true !== fn13(b14, s15, x16, s17)) { b18 = true; } else { b18 = false; }var s20 = '' + (b18);var x24 = (eval(\\\"b22\\\")) | 0;var b25 = false; if (Number(s20) < x24) { b25 = true; }var b33 = !(Boolean(x31));var b34; if (b33) {  b34 = (s29).match(/^(l|F[a-z]*)$/) !== null; } else { b34 = false; }var e36 = \\\"b34\\\";var b37 = (b2 != b25); var b38 = eval(e36);b37 || b38\")");
    } else {
        x45 = (x43) ? true : false;
    }
    return x45;
}
fn46(input_B3, input_B1, input_I1, input_I2, input_B2, input_S1, input_S3);
