// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') === input_string('S3')) then int(str(bool(str((input_string('S3') < (if ((input_int('I3') * input_int('I3')) >= int(not((input_bool('B3') === input_bool('B3'))))) then input_string('S1') else input_string('S2'))))))) else input_int('I1'))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn30 = function (x6, x28, s1, b10, s20, s2) {
    var s5 = s2;
    var s19 = s1;
    var b3 = false;
    if (s1 === s2) {
        b3 = true;
    }
    var x29;
    if (b3) {
        var x7 = x6;
        x8 = x6;
        x9 = x7;
        var b11 = b10;
        var b14;
        if ((b10 === b11)) {
            b14 = false;
        } else {
            b14 = true;
        }
        var x15 = Number(b14);
        var e16 = "x15";
        var x21;
        if ((x8 * x9 >= eval(e16))) {
            x21 = s19;
        } else {
            x21 = s20;
        }
        var b22 = s5;
        var b23 = x21;
        var s24 = (b22 < b23).toString();
        var b25 = Boolean(s24);
        var s26 = (b25).toString();
        x29 = Number(s26);
    } else {
        x29 = x28;
    }
    return x29;
}
fn30(input_I3, input_I1, input_S1, input_B3, input_S2, input_S3);
