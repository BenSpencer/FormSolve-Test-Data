// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_int('I3') else (if not(not((if (str(bool(str(int(input_bool('B2'))))) === str(bool(int(input_string('S2'))))) then input_bool('B2') else bool(str(input_int('I1')))))) then int((len(input_string('S3')) != int(not((input_int('I2') == int((input_bool('B1') !== bool(len(input_string('S3')))))))))) else int((if (input_int('I3') >= input_int('I3')) then input_bool('B3') else input_bool('B1')))))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn52(b15, x2, b46, s9, b1, x26, x17, s24) {
    var b27 = b1;
    var x42 = x2;
    var b47 = b27;
    var b3 = b15;
    var e7 = "var x4 = Number(b3);((x4).toString()) ? true : false";
    var x10 = parseInt(s9, 10);
    var b13 = false;
    if ('' + (eval(e7)) === ((x10) ? true : false).toString()) {
        b13 = true;
    }
    var x21;
    if (b13) {
        var e16 = "b15";
        x21 = eval(e16);
    } else {
        x21 = eval("var s18 = (x17).toString();Boolean(s18)");
    }
    var b23 = !(!(x21));
    var s28 = s24;
    var l25 = (s24).length;
    var b30 = ((s28).length) ? true : false;
    var x33 = +((b27 !== b30));
    var b34;
    if (x26 == x33) {
        b34 = true;
    } else {
        b34 = false;
    }
    var b37 = !(eval("b34"));
    var x38 = (b37) ? 1 : 0;
    var x41 = ((l25 != x38)) | 0;
    var x43 = x42;
    var b44 = x42 >= x43;
    var x48;
    if (b44) {
        x48 = b46;
    } else {
        x48 = b47;
    }
    var x50;
    if (b23) {
        x50 = x41;
    } else {
        x50 = Number(x48);
    }
    var x51;
    if (b1) {
        x51 = x2;
    } else {
        x51 = x50;
    }
    return x51;
}
fn52(input_B2, input_I3, input_B3, input_S2, input_B1, input_I2, input_I1, input_S3);
