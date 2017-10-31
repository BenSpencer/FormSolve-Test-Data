// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_bool('B3') || ((if input_bool('B1') then bool(int(input_string('S2'))) else bool(str(len(input_string('S3'))))) && (bool(input_string('S1')) !== (int(bool(input_int('I1'))) === int(input_string('S1')))))) else input_bool('B2'))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

(function (x18, b1, s16, s6, s10, b5, b32) {
    var b3 = b1;
    var e15 = "var e7 = \"s6\";var x8 = parseInt(eval(e7), 10);var x14; if (b5) { x14 = Boolean(x8); } else { var l11 = (s10).length; x14 = (String(l11)) ? true : false; }x14";
    var s22 = s16;
    var b17 = !! (s16);
    var x23 = parseInt(s22, 10);
    var b24 = eval("var x20 = +((x18) ? true : false);x20") === x23;
    var b26 = b17;
    var b27 = b24;
    var b28 = eval(e15);
    var b29 = b26 !== b27;
    var b30;
    if (eval("b3") || b28 && b29) {
        b30 = true;
    } else {
        b30 = false;
    }
    var x33;
    if (eval("b1")) {
        x33 = b30;
    } else {
        x33 = b32;
    }
    return x33;
})(input_I1, input_B3, input_S1, input_S2, input_S3, input_B1, input_B2);
