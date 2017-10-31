// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then bool(int((not((if input_bool('B1') then bool(str(input_int('I3'))) else not((len(str((input_bool('B3') == input_bool('B2')))) in [96, 147, 1, 6])))) === (input_string('S1') != input_string('S2'))))) else (str(int(input_string('S3'))) === str(int(not(bool(str(int(str(input_bool('B2'))))))))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn42(s21, s28, x2, b31, b5, b1, s20) {
    var b7 = b31;
    var s3 = '' + (x2);
    var e6 = "b5";
    var b8 = false;
    if (eval(e6) == b7) {
        b8 = true;
    }
    var s10 = String(b8);
    var l11 = (s10).length;
    var opts13 = [96, 147, 1, 6];
    var b12 = false;
    for (var idx14 = 0; idx14 < opts13.length; idx14++) {
        if (opts13[idx14] == l11) {
            b12 = true;
        }
    }
    var b15;
    if (b12) {
        b15 = false;
    } else {
        b15 = true;
    }
    var b17 = !((b1 ? !! (s3) : b15));
    var e18 = "b17";
    var b22 = s20 != s21;
    var b24 = false;
    if (eval("eval(e18)") === b22) {
        b24 = true;
    }
    var x26 = ~~ (b24);
    var x33 = Number(String(b31));
    var b35 = Boolean('' + (x33));
    var b36 = !(b35);
    var s38 = (+(b36)).toString();
    var b39 = false;
    if ((parseInt(s28, 10)).toString() === s38) {
        b39 = true;
    }
    var x41;
    if (true) {
        x41 = Boolean(x26);
    } else {
        x41 = b39;
    }
    return x41;
}
fn42(input_S2, input_S3, input_I3, input_B2, input_B3, input_B1, input_S1);
