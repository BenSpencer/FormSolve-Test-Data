// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_int('I1') <= len(input_string('S3')))) then (if (input_bool('B3') || (if input_bool('B2') then bool(input_string('S3')) else input_bool('B3'))) then input_bool('B1') else bool(str(input_int('I2')))) else not(not((input_bool('B1') !== (input_bool('B3') == input_bool('B2'))))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn34 = function (b24, s2, x16, x1, b11, b15) {
    var s9 = s2;
    var b21 = b15;
    var b22 = b11;
    var b8 = b24;
    var b4 = x1 <= (s2).length;
    var b6 = !(b4);
    var b32;
    if (eval("var e23 = \"b22\";var b25; if (eval(e23) == b24) { b25 = true; } else { b25 = false; }var b27; if (b21 !== b25) { b27 = true; } else { b27 = false; }var e30 = \"!(b27)\";eval(e30)")) {
        b32 = false;
    } else {
        b32 = true;
    }
    var x33;
    if (b6) {
        var b7 = b11;
        var b13 = false;
        if (b7 || (b8 ? !! (s9) : b11)) {
            b13 = true;
        }
        var x20;
        if (b13) {
            x20 = b15;
        } else {
            x20 = !! (eval("'' + (x16)"));
        }
        x33 = x20;
    } else {
        x33 = b32;
    }
    return x33;
}
fn34(input_B2, input_S3, input_I2, input_I1, input_B3, input_B1);
