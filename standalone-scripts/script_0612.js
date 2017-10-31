// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(bool(int(not((input_int('I3') == len(input_string('S1'))))))) then (len(str(int(bool(int(str(not(bool(input_string('S3'))))))))) != 6) else (1 === int((if bool(int(bool(input_int('I2')))) then input_bool('B2') else input_bool('B1'))))) then str(int(input_bool('B1'))) else str(bool(input_string('S2'))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn44(b29, s2, x1, x23, b31, s11, s40) {
    var b37 = b31;
    var b4;
    if (x1 == (s2).length) {
        b4 = true;
    } else {
        b4 = false;
    }
    var b6 = !(b4);
    var x7 = (b6) ? 1 : 0;
    var e8 = "x7";
    var b10 = !(Boolean(eval(e8)));
    var e26 = "var b25 = !!(eval(\"x23\"));b25";
    var b28 = Boolean((eval(e26)) | 0);
    var e30 = "b29";
    var x32;
    if (b28) {
        x32 = eval(e30);
    } else {
        x32 = b31;
    }
    var x36;
    if (b10) {
        x36 = (('' + (+(eval("var b12 = (s11) ? true : false;var b13 = !(b12);!!(parseInt((b13).toString(), 10))")))).length != 6);
    } else {
        x36 = (1 === (x32) ? 1 : 0);
    }
    var x38 = +(b37);
    var s39 = (x38).toString();
    var b41 = Boolean(s40);
    var s42 = (b41).toString();
    var x43;
    if (x36) {
        x43 = s39;
    } else {
        x43 = s42;
    }
    return x43;
}
fn44(input_B2, input_S1, input_I3, input_I2, input_B1, input_S3, input_S2);
