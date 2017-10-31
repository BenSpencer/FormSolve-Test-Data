// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool((if bool(int((input_int('I1') === int(bool(input_int('I3')))))) then int(((int(input_string('S1')) >= (input_int('I1') * input_int('I1'))) == not((input_string('S2') > str(input_int('I2')))))) else (len(input_string('S3')) % input_int('I1')))) else (str(input_int('I3')) != input_string('S2')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn46(b1, s31, x3, x21, s20, s12, x14) {
    var s40 = s20;
    var x38 = x3;
    var x2 = x14;
    var x33 = x14;
    var e10 = "~~(eval(\"var b6; if (x2 === (Boolean(x3)) | 0) { b6 = true; } else { b6 = false; }b6\"))";
    var b11 = (eval(e10)) ? true : false;
    var x15 = x14;
    x16 = x14;
    x17 = x15;
    var b18 = parseInt(s12, 10) >= x16 * x17;
    var b27;
    if (eval("eval(\"var s22 = '' + (x21);(s20 > s22)\")")) {
        b27 = false;
    } else {
        b27 = true;
    }
    var b28;
    if (b18 == b27) {
        b28 = true;
    } else {
        b28 = false;
    }
    var x30 = Number(b28);
    x34 = (s31).length;
    x35 = x33;
    var x36;
    if (b11) {
        x36 = x30;
    } else {
        x36 = x34 % x35;
    }
    var b37 = (x36) ? true : false;
    var b43 = String(x38);
    var b44 = eval("eval(\"s40\")");
    var x45;
    if (b1) {
        x45 = b37;
    } else {
        x45 = b43 != b44;
    }
    return x45;
}
fn46(input_B3, input_S3, input_I3, input_I2, input_S2, input_S1, input_I1);
