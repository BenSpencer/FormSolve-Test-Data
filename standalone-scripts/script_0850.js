// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str(((int(input_string('S2')) / int((input_string('S3') > str((if (if bool(input_int('I1')) then bool(int(str(input_int('I1')))) else not(not(not((input_string('S3') <= (if bool(input_string('S1')) then input_string('S1') else str(len(input_string('S3'))))))))) then input_int('I1') else input_int('I3')))))) == 0))) > input_int('I2')) then int(input_string('S3')) else len(str(input_int('I1'))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn55 = function (s1, s11, x30, x29, x44, s12) {
    var s48 = s11;
    var x51 = x29;
    var e43 = "var x36 = +(eval(\"var s4 = s11; var x5 = x29; var x7 = x5; var b27 = !(eval(\\\"var s15 = s11; var s14 = s12; var b13 = (s12) ? true : false;var e16 = \\\\\\\"s15\\\\\\\";var l17 = (eval(e16)).length;var x19; if (b13) { x19 = s14; } else { x19 = '' + (l17); }!(!(eval(\\\\\\\"(s11 <= eval(\\\\\\\\\\\\\\\"x19\\\\\\\\\\\\\\\"))\\\\\\\")))\\\"));var x28; if (Boolean(x5)) { var s8 = '' + (x7);var b10 = (parseInt(s8, 10)) ? true : false; x28 = b10; } else { x28 = b27; }var x31; if (x28) {  x31 = x29; } else { x31 = x30; }var s32 = '' + (x31);(s4 > s32)\"));x37 = Number(eval(\"s1\")) / x36;var b39 = x37 == 0;('' + (b39)).length";
    var e47 = "(eval(e43) > x44)";
    var e50 = "parseInt(s48, 10)";
    var s52 = String(x51);
    var l53 = (s52).length;
    var x54;
    if (eval(e47)) {
        x54 = eval(e50);
    } else {
        x54 = l53;
    }
    return x54;
}
fn55(input_S2, input_S3, input_I3, input_I1, input_I2, input_S1);
