// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((int((input_string('S3') >= input_string('S3'))) === input_int('I1')) !== true) then bool(int(input_string('S1'))) else input_bool('B1'))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn19 = function (s1, b17, x8, s14) {
    var e9 = "x8";
    var b10 = eval("var s3 = s1; var b4; if (eval(\"s1\") >= s3) { b4 = true; } else { b4 = false; }(b4) | 0");
    var b11 = eval(e9);
    var x15 = Number(s14);
    var b16 = (x15) ? true : false;
    var x18;
    if ((b10 === b11 !== true)) {
        x18 = b16;
    } else {
        x18 = b17;
    }
    return x18;
}
fn19(input_S3, input_B1, input_I1, input_S1);
