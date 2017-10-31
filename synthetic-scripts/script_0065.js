// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool((if not((if not(not((int(str(input_int('I1'))) >= input_int('I1')))) then not(input_bool('B1')) else input_bool('B2'))) then len(str((str(input_bool('B1')) == input_string('S1')))) else input_int('I1')))) then input_int('I1') else int(input_string('S3')))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn33(s17, b11, s30, b15, x1) {
    var x29 = x1;
    var x25 = x1;
    var b9 = b15;
    var x4 = x1;
    var b5 = Number((x1).toString());
    var b6 = x4;
    var b8;
    if (!(b5 >= b6)) {
        b8 = false;
    } else {
        b8 = true;
    }
    var x13;
    if (b8) {
        x13 = !(b9);
    } else {
        x13 = eval("b11");
    }
    var e23 = "var s16 = '' + (b15);var e19 = \"eval(\\\"s17\\\")\";var b20 = s16 == eval(e19);var s22 = '' + (b20);s22";
    var x26;
    if (!(x13)) {
        x26 = (eval(e23)).length;
    } else {
        x26 = x25;
    }
    var b28 = !(Boolean(x26));
    var x32;
    if (b28) {
        x32 = x29;
    } else {
        x32 = Number(s30);
    }
    return x32;
}
fn33(input_S1, input_B2, input_S3, input_B1, input_I1);
