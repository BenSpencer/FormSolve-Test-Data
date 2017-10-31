// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then not((not(not(bool(((input_int('I1') + (input_int('I2') * int((if bool(input_string('S2')) then false else (input_int('I2') <= int(not(not(not(input_bool('B2')))))))))) / int(not(input_bool('B1'))))))) == input_bool('B2'))) else bool(input_int('I1')))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn37 = function (x2, b19, b29, s3, x1) {
    var x34 = x1;
    var x36;
    if (false) {
        x36 = eval("var b6 = b29; var e27 = \"var x5 = x2; var b4 = (s3) ? true : false;var x13; if (b4) {  x13 = false; } else { var b7; if (b6) { b7 = false; } else { b7 = true; } x13 = (x5 <= (!(!(b7))) ? 1 : 0); }x15 = x2; x16 = (x13) ? 1 : 0;x22 = (x1 + x15 * x16); x23 = Number(!(b19));var b25; if (!!(x22 / x23)) { b25 = false; } else { b25 = true; }var b26; if (b25) { b26 = false; } else { b26 = true; }b26\";var b30; if (eval(\"eval(e27)\") == b29) { b30 = true; } else { b30 = false; }!(b30)");
    } else {
        x36 = Boolean(x34);
    }
    return x36;
}
fn37(input_I2, input_B1, input_B2, input_S2, input_I1);
