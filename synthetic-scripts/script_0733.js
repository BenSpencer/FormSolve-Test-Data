// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int((if not((int(((4 / input_int('I1')) >= input_int('I2'))) < len(input_string('S3')))) then true else (true !== bool(str(input_int('I1')))))))) then bool(str(bool(input_int('I2')))) else input_bool('B3'))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn32(x25, x1, b30, s10) {
    var x5 = x25;
    var x16 = x1;
    var b19;
    if (true !== ('' + (x16)) ? true : false) {
        b19 = true;
    } else {
        b19 = false;
    }
    var s23 = (Number((eval("var e9 = \"~~((eval(\\\"x2 = 4 / x1;x2\\\") >= x5))\";var b12 = eval(e9); var b13 = (s10).length;!(b12 < b13)") ? true : b19))).toString();
    var b24 = !! (s23);
    var e29 = "var b26 = Boolean(x25);var s27 = (b26).toString();!!(s27)";
    return (b24 ? eval(e29) : b30);
}
fn32(input_I2, input_I1, input_B3, input_S3);
