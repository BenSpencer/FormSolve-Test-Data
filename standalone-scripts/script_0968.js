// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_string('S1') < str(input_bool('B3'))) || input_bool('B3')) then (if input_bool('B1') then input_int('I1') else int((input_string('S2') != str((input_bool('B2') && not((input_int('I3') <= 6))))))) else 1)

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (x15, x10, b9, s1, b2, s12, b14) {
    var b6 = b2;
    var s3 = String(b2);
    var b4 = false;
    if (s1 < s3) {
        b4 = true;
    }
    var b7;
    if (b4) {
        b7 = true;
    } else {
        b7 = b6;
    }
    var x25;
    if (b9) {
        var e11 = "x10";
        x25 = eval(e11);
    } else {
        var b16 = x15 <= 6;
        var b18 = !(b16);
        var b19;
        if (b14 && b18) {
            b19 = true;
        } else {
            b19 = false;
        }
        var s21 = String(b19);
        var b22 = eval("s12") != s21;
        x25 = (b22) ? 1 : 0;
    }
    var e26 = "x25";
    var x27;
    if (b7) {
        x27 = eval(e26);
    } else {
        x27 = 1;
    }
    return x27;
})(input_I3, input_I1, input_B1, input_S1, input_B3, input_S2, input_B2);
