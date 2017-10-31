// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_int('I2') + int(bool(input_string('S2'))))) then (if bool(input_string('S2')) then false else bool(int((if input_bool('B3') then (not(((input_int('I1') % input_int('I3')) >= int((if input_bool('B2') then ((int(input_string('S2')) < input_int('I3')) && input_bool('B2')) else (if (bool(int(input_bool('B3'))) || input_bool('B3')) then input_bool('B1') else not(input_bool('B2'))))))) || input_bool('B2')) else (input_string('S2') > str(regex-test(input_string('S3'), /^([0-9]lq|s)?$/))))))) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn57 = function (s46, x11, s16, x12, b32, x1, b10, b15) {
    var s2 = s16;
    var b55 = b15;
    var x4 = ~~ ((s2) ? true : false);
    x5 = x1;
    x6 = x4;
    var b7 = !! (x5 + x6);
    var x56;
    if (b7) {
        var s8 = s16;
        var b9 = Boolean(s8);
        var x54;
        if (b9) {
            x54 = false;
        } else {
            var s45 = s16;
            var b26 = b10;
            var re47 = new RegExp("^([0-9]lq|s)?$");
            var s48 = '' + (re47.test(s46));
            var x51;
            if (b10) {
                var b42 = b15;
                var b41;
                if (eval("var x20 = x12; x13 = x11; x14 = x12;var b23 = b15; var b33 = b15; var e18 = \"var e17 = \\\"s16\\\";eval(e17)\";var b21 = false; if (parseInt(eval(e18), 10) < x20) { b21 = true; }var b24; if (b21) {  b24 = b23; } else { b24 = false; }var x36; if (b15) { x36 = b24; } else { var b29 = b26; var b28 = Boolean((b26) ? 1 : 0);var b30; if (b28) { b30 = true; } else {  b30 = b29; }var x35; if (b30) {  x35 = b32; } else { x35 = !(b33); } x36 = x35; }var x37 = Number(x36);var b38; if (x13 % x14 >= x37) { b38 = true; } else { b38 = false; }b38")) {
                    b41 = false;
                } else {
                    b41 = true;
                }
                var b43 = false;
                if (b41 || b42) {
                    b43 = true;
                }
                x51 = b43;
            } else {
                x51 = (s45 > s48);
            }
            var x52 = (x51) | 0;
            var b53 = (x52) ? true : false;
            x54 = b53;
        }
        x56 = x54;
    } else {
        x56 = b55;
    }
    return x56;
}
fn57(input_S3, input_I1, input_S2, input_I3, input_B1, input_I2, input_B3, input_B2);
