// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I3') % int(input_bool('B1'))) in [26, 59, 8, 74]) then int(((bool(int((if not(bool(input_string('S2'))) then (input_string('S1') < input_string('S2')) else (input_bool('B3') != (str(int(bool(input_string('S1')))) !== input_string('S1')))))) != ((bool(input_int('I3')) == (input_bool('B1') != input_bool('B1'))) != bool(str(input_bool('B1'))))) === (len(input_string('S1')) === input_int('I3')))) else int(input_string('S3')))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn62(b20, s10, b3, s15, s59, x1) {
    var b37 = b3;
    var x34 = x1;
    var opts8 = [26, 59, 8, 74];
    var b7 = false;
    for (var idx9 = 0; idx9 < opts8.length; idx9++) {
        if (opts8[idx9] == (eval("x1") % ~~(b3))) {
            b7 = true;
            break;
        }
    }
    var x61;
    if (b7) {
        var x53 = x34;
        var s51 = s15;
        var e31 = "var s16 = s10; var s21 = s15; var e13 = \"Boolean(eval(\\\"s10\\\"))\";var e17 = \"s16\";var b18; if (s15 < eval(e17)) { b18 = true; } else { b18 = false; }var s25 = s21; var x23 = (!!(s21)) ? 1 : 0;var b26 = (x23).toString(); var b27 = s25;var b28 = false; if (b20 != b26 !== b27) { b28 = true; }var x30; if (!(eval(e13))) { x30 = b18; } else { x30 = b28; }x30";
        var x32 = ~~ (eval(e31));
        var b33 = Boolean(x32);
        var b43 = b37;
        var b35 = Boolean(x34);
        var e36 = "b35";
        var b38 = b37;
        var b47;
        if ((eval(e36) == (b37 != b38)) != Boolean(eval("'' + (b43)"))) {
            b47 = true;
        } else {
            b47 = false;
        }
        var b49 = b33 != b47;
        var b54 = false;
        if ((s51).length === x53) {
            b54 = true;
        }
        var b56 = b49;
        var b57 = b54;
        x61 = Number(b56 === b57);
    } else {
        x61 = Number(s59);
    }
    return x61;
}
fn62(input_B3, input_S2, input_B1, input_S1, input_S3, input_I3);
