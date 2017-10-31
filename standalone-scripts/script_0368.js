// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((str(input_bool('B1')) === input_string('S2'))) == 4) then input_bool('B2') else (if ((int(input_bool('B2')) % int(regex-test(input_string('S1'), /^M_[-_ ]?to(\d|NtU)$/))) != (if (if (input_string('S1') != input_string('S3')) then bool(str((input_int('I3') % int(bool(input_string('S3')))))) else (33 > input_int('I2'))) then int(not(input_bool('B2'))) else input_int('I3'))) then (71 == input_int('I1')) else not((input_int('I3') <= int((if input_bool('B2') then input_string('S1') else str(input_bool('B2'))))))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (b10, s4, x48, b1, x22, s19, s13, x32) {
    var b11 = b10;
    var b8 = false;
    if (Number(((eval("b1")).toString() === s4)) == 4) {
        b8 = true;
    }
    var x63;
    if (b8) {
        x63 = b10;
    } else {
        var x51 = x22;
        var b52 = b11;
        var s53 = s13;
        var b49 = false;
        if (71 == x48) {
            b49 = true;
        }
        var x62;
        if (eval("eval(\"eval(\\\"var b36 = b11; var s18 = s13; var re14 = /^M_[-_ ]?to(\\\\\\\\d|NtU)$/;var x15 = +(re14.test(s13));var x41 = x22; var s23 = s19; var b20 = false; if (s18 != s19) { b20 = true; }var e31 = \\\\\\\"x27 = x22 % ((eval(\\\\\\\\\\\\\\\"s23\\\\\\\\\\\\\\\")) ? true : false) ? 1 : 0;!!('' + (x27))\\\\\\\";var b33 = 33; var b34 = x32;var x35; if (b20) { x35 = eval(e31); } else { x35 = b33 > b34; }var e37 = \\\\\\\"b36\\\\\\\";var e38 = \\\\\\\"eval(e37)\\\\\\\";var x42; if (x35) { x42 = (!(eval(e38))) ? 1 : 0; } else {  x42 = x41; }((Number(b11) % x15) != x42)\\\")\")")) {
            x62 = b49;
        } else {
            var b54 = b52;
            var s55 = String(b54);
            var x56;
            if (b52) {
                x56 = s53;
            } else {
                x56 = s55;
            }
            var x57 = Number(x56);
            var b58;
            if (x51 <= x57) {
                b58 = true;
            } else {
                b58 = false;
            }
            var b60;
            if (b58) {
                b60 = false;
            } else {
                b60 = true;
            }
            var e61 = "b60";
            x62 = eval(e61);
        }
        x63 = x62;
    }
    return x63;
})(input_B2, input_S2, input_I1, input_B1, input_I3, input_S3, input_S1, input_I2);
