// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (if bool(int(regex-test(str(int(not((if (regex-test(str(input_int('I1')), /^tqT([-_ ]N|b)+$/) == not(bool(int(input_string('S2'))))) then input_bool('B1') else not(("" == input_string('S3'))))))), /^[-_ ]gC(\W*a|vU\rUaWaD)\sR.b$/))) then bool(str(input_int('I2'))) else (input_string('S2') in ['SbOLK', 'p0OX', 's2', 'XyCM', 'ki', 'm5n', '', '1d', 'Ys', 'Ck'])) else bool(str(input_int('I2'))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn42(b15, x30, s16, x3, s33, b1) {
    var x38 = x30;
    var e2 = "b1";
    var s9 = s33;
    var opts35 = ['SbOLK', 'p0OX', 's2', 'XyCM', 'ki', 'm5n', '', '1d', 'Ys', 'Ck'];
    var b34 = false;
    for (var idx36 = 0; idx36 < opts35.length; idx36++) {
        if (opts35[idx36] == s33) {
            b34 = true;
            break;
        }
    }
    var x37;
    if (eval("var e6 = \"var s4 = '' + (x3);var re5 = /^tqT([-_ ]N|b)+$/;re5.test(s4)\";var e7 = \"eval(e6)\";var x10 = Number(s9);var b12 = !(!!(x10));var b13; if (eval(\"eval(e7)\") == b12) { b13 = true; } else { b13 = false; }var e19 = \"var b17; if (\\\"\\\" == s16) { b17 = true; } else { b17 = false; }b17\";var b20; if (eval(e19)) { b20 = false; } else { b20 = true; }var b22; if ((b13 ? b15 : b20)) { b22 = false; } else { b22 = true; }var x24 = +(eval(\"b22\"));var s25 = '' + (x24);var re26 = new RegExp(\"^[-_ ]gC(\\\\W*a|vU\\\\rUaWaD)\\\\sR.b$\");var x27 = (re26.test(s25)) ? 1 : 0;(x27) ? true : false")) {
        var b32 = ('' + (x30)) ? true : false;
        x37 = b32;
    } else {
        x37 = b34;
    }
    var s39 = '' + (x38);
    var b40 = (s39) ? true : false;
    var x41;
    if (eval(e2)) {
        x41 = x37;
    } else {
        x41 = b40;
    }
    return x41;
}
fn42(input_B1, input_I2, input_S3, input_I1, input_S2, input_B3);
