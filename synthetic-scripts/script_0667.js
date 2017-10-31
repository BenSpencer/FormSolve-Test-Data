// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str(len(input_string('S3'))) in ['bStv', 'Kmy', 'eFq2', 'nzho']) !== input_bool('B1')) then (int((input_bool('B2') || not((input_bool('B3') || not(not(input_bool('B3'))))))) in [3, 1, 0, 0]) else bool(int(bool(input_string('S3')))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

(function (s1, b7, b10, b11) {
    var s25 = s1;
    var l2 = (s1).length;
    var s3 = (l2).toString();
    var opts5 = ['bStv', 'Kmy', 'eFq2', 'nzho'];
    var b4 = false;
    for (var idx6 = 0; idx6 < opts5.length; idx6++) {
        if (opts5[idx6] == s3) {
            b4 = true;
            break;
        }
    }
    var b8 = false;
    if (b4 !== b7) {
        b8 = true;
    }
    var e18 = "var b12 = b11; var b13 = !(b12);var b14; if (b13) { b14 = false; } else { b14 = true; }var b17 = !((b11 || b14));b17";
    var b19 = b10 || eval(e18);
    var x21 = +(b19);
    var opts23 = [3, 1, 0, 0];
    var x29;
    if (b8) {
        x29 = opts23.indexOf(x21) > -1;
    } else {
        var b26 = Boolean(s25);
        var x27 = Number(b26);
        x29 = (x27) ? true : false;
    }
    return x29;
})(input_S3, input_B1, input_B2, input_B3);
