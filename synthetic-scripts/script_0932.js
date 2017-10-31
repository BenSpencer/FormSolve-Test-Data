// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((int(str(not(((input_string('S3') !== input_string('S1')) === input_bool('B2'))))) < int((input_string('S1') === str(not((int(bool(str(bool(int(str(input_int('I2'))))))) === int(str(input_int('I1'))))))))) && input_bool('B1')) || input_bool('B2')) then regex-replace(str(input_bool('B1')), /DC(v|\W[A-Z]?)aq/, "Vw") else input_string('S3'))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn51 = function (b37, s14, s1, b41, x15, x23) {
    var s48 = s1;
    var b44 = b37;
    var b6 = b41;
    var s2 = s14;
    var b3;
    if (s1 !== s2) {
        b3 = true;
    } else {
        b3 = false;
    }
    var e7 = "b6";
    var b9;
    if (eval("b3") === eval("eval(e7)")) {
        b9 = true;
    } else {
        b9 = false;
    }
    var b11;
    if (b9) {
        b11 = false;
    } else {
        b11 = true;
    }
    var x13 = Number('' + (b11));
    var x26 = Number((eval("x23")).toString());
    var b28 = eval("var s16 = (x15).toString();var x17 = Number(s16);var b18 = (x17) ? true : false;var x21 = +(!!(String(b18)));x21") === eval("x26");
    var b30 = !(b28);
    var b32 = s14 === String(b30);
    var x34 = (b32) | 0;
    var b35 = x13 < x34;
    var e38 = "b37";
    var b39 = b35;
    var b40 = eval(e38);
    var b42 = b39 && b40 || b41;
    var x50;
    if (b42) {
        var s45 = String(b44);
        var s46 = (s45).replace(/DC(v|\W[A-Z]?)aq/, "Vw");
        x50 = s46;
    } else {
        var e49 = "s48";
        x50 = eval(e49);
    }
    return x50;
}
fn51(input_B1, input_S1, input_S3, input_B2, input_I2, input_I1);
