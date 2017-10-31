// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B3') then false else (len((if bool(input_string('S2')) then input_string('S3') else input_string('S2'))) in [0, 0, 9, 59, 66, 1, 0, 164, 86])) then 6 else (int(bool(int(bool((if not(input_bool('B3')) then str(((4 + len(input_string('S2'))) <= int((if (input_bool('B1') != not((str(input_int('I2')) == str(input_bool('B3'))))) then regex-test(str((int(str(input_int('I1'))) <= input_int('I2'))), /^obb(Aa|[a-z]+op_)$/) else bool(len(str(input_bool('B1')))))))) else input_string('S2')))))) % len(input_string('S2'))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn64 = function (x21, s5, b1, x31, s15, b20) {
    var s2 = s15;
    var b13 = b1;
    var s6 = s2;
    var b4 = Boolean(eval("s2"));
    var x7;
    if (b4) {
        x7 = s5;
    } else {
        x7 = s6;
    }
    var opts10 = [0, 0, 9, 59, 66, 1, 0, 164, 86];
    var b9 = false;
    for (var idx11 = 0; idx11 < opts10.length; idx11++) {
        if (opts10[idx11] == (x7).length) {
            b9 = true;
        }
    }
    var x12;
    if (b1) {
        x12 = false;
    } else {
        x12 = b9;
    }
    var s58 = s15;
    var b56 = (eval("var s51 = s15; var b24 = b13; var b14 = !(b13);var e50 = \"var l16 = (s15).length;x18 = 4; x19 = eval(\\\"l16\\\");var x36 = x21; var b41 = b20; var b26 = false; if ((eval(\\\"x21\\\")).toString() == '' + (b24)) { b26 = true; }var b28; if (b26) { b28 = false; } else { b28 = true; }var b29 = false; if (b20 != b28) { b29 = true; }var s32 = '' + (x31);var x34 = Number(eval(\\\"s32\\\"));var e35 = \\\"x34\\\";var b37 = eval(e35); var b38 = x36;var re40 = /^obb(Aa|[a-z]+op_)$/;var s42 = '' + (b41);var b47 = x18 + x19; var b48 = ((b29 ? re40.test(String(b37 <= b38)) : ((s42).length) ? true : false)) | 0;var s49 = '' + (b47 <= b48);s49\";var x52; if (b14) { x52 = eval(e50); } else {  x52 = s51; }var b53 = Boolean(x52);var x54 = ~~(b53);x54")) ? true : false;
    var l60 = (eval("s58")).length;
    x61 = (b56) ? 1 : 0;
    x62 = l60;
    var x63;
    if (x12) {
        x63 = 6;
    } else {
        x63 = x61 % x62;
    }
    return x63;
}
fn64(input_I2, input_S3, input_B3, input_I1, input_S2, input_B1);
