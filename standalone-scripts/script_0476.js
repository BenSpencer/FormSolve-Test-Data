// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str(int((str((((input_int('I3') + int((str(input_bool('B3')) == str(input_int('I3'))))) in [57, -65, 37, 1, 98, 7, 145, 1, 1]) && input_bool('B2'))) > input_string('S2'))))) <= int(input_bool('B3'))) then (input_string('S1') in ['DAn', '', '']) else (input_bool('B2') && (str(bool(int(input_bool('B1')))) !== input_string('S3'))))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn48 = function (x1, b37, s42, s32, b2, b16, s21) {
    var b36 = b16;
    var b28 = b2;
    var x4 = x1;
    var s3 = '' + (b2);
    var e5 = "x4";
    var opts13 = [57, -65, 37, 1, 98, 7, 145, 1, 1];
    var e15 = "opts13.indexOf((x1 + ((s3 == '' + (eval(e5)))) | 0)) > -1";
    var e17 = "b16";
    var b18;
    if (eval(e15)) {
        b18 = eval(e17);
    } else {
        b18 = false;
    }
    var s20 = String(b18);
    var b23;
    if (s20 > eval("s21")) {
        b23 = true;
    } else {
        b23 = false;
    }
    var x25 = (b23) ? 1 : 0;
    var l27 = ((x25).toString()).length;
    var x29 = (b28) | 0;
    var b30;
    if (l27 <= x29) {
        b30 = true;
    } else {
        b30 = false;
    }
    var x47;
    if (b30) {
        var opts34 = ['DAn', '', ''];
        var b33 = false;
        for (var idx35 = 0; idx35 < opts34.length; idx35++) {
            if (opts34[idx35] == s32) {
                b33 = true;
            }
        }
        x47 = b33;
    } else {
        var b43 = eval("var x38 = ~~(b37);var s40 = String((x38) ? true : false);s40");
        var b44 = s42;
        var b45;
        if (b36) {
            b45 = b43 !== b44;
        } else {
            b45 = false;
        }
        x47 = b45;
    }
    return x47;
}
fn48(input_I3, input_B1, input_S3, input_S1, input_B3, input_B2, input_S2);
