// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (int(input_bool('B2')) <= int(bool(len(str(bool(str(int((if (if (input_string('S3') < str(input_int('I1'))) then true else bool(int((if not(bool(input_int('I1'))) then input_string('S3') else str(input_int('I3')))))) then (input_string('S1') <= input_string('S2')) else (if not(bool(input_string('S3'))) then bool(input_string('S3')) else not(input_bool('B3')))))))))))) else not(input_bool('B1')))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn51 = function (s22, b48, s23, x10, b2, s13, b1, x15) {
    var b33 = b1;
    var b49 = !(b48);
    var x50;
    if (b1) {
        var e3 = "b2";
        var b46;
        if ((eval(e3)) | 0 <= eval("var s27 = s13; var x6 = x10; var s5 = s13; var b8 = s5; var b9 = (x6).toString();var x21; if (b8 < b9) {  x21 = true; } else { x21 = !!(eval(\"var b12; if ((x10) ? true : false) { b12 = false; } else { b12 = true; }var e14 = \\\"s13\\\";var s16 = (x15).toString();var x17; if (b12) { x17 = eval(e14); } else { x17 = s16; }var x18 = Number(x17);x18\")); }var b24; if (s22 <= s23) { b24 = true; } else { b24 = false; }var e26 = \"b24\";var s30 = s27; var b28 = !!(s27);var b29 = !(b28);var b31 = Boolean(s30);var b34; if (b33) { b34 = false; } else { b34 = true; }var x36; if (x21) { x36 = eval(e26); } else { x36 = (b29 ? eval(\"b31\") : b34); }var l41 = ('' + (!!('' + ((x36) ? 1 : 0)))).length;var b43 = !!(eval(\"l41\"));(b43) ? 1 : 0")) {
            b46 = true;
        } else {
            b46 = false;
        }
        x50 = b46;
    } else {
        x50 = b49;
    }
    return x50;
}
fn51(input_S1, input_B1, input_S2, input_I1, input_B2, input_S3, input_B3, input_I3);
