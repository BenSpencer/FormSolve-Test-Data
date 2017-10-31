// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not((str(int(bool(input_int('I2')))) != str((if bool((len(input_string('S3')) + input_int('I3'))) then 105 else int((input_bool('B3') && input_bool('B2'))))))) else (int((input_string('S2') === input_string('S3'))) > input_int('I1')))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn36(b1, b14, s25, s26, x10, x2, x31) {
    var s7 = s26;
    var b15 = b1;
    x11 = (eval("s7")).length;
    x12 = x10;
    var b13 = (x11 + x12) ? true : false;
    var b16;
    if (b15) {
        b16 = b14;
    } else {
        b16 = false;
    }
    var x18 = Number(b16);
    var s20 = String((b13 ? 105 : x18));
    var b21 = String(eval("var x4 = ~~(!!(x2));x4")) != s20;
    var b24;
    if (eval("b21")) {
        b24 = false;
    } else {
        b24 = true;
    }
    var e29 = "var b27 = s25 === s26;b27";
    var x30 = (eval(e29)) | 0;
    var e32 = "x31";
    var b33 = false;
    if (x30 > eval(e32)) {
        b33 = true;
    }
    var x35;
    if (b1) {
        x35 = b24;
    } else {
        x35 = b33;
    }
    return x35;
}
fn36(input_B2, input_B3, input_S2, input_S3, input_I3, input_I2, input_I1);
