// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(bool(int(str((input_string('S1') !== input_string('S1')))))) else (len(input_string('S3')) <= input_int('I1')))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn17(b1, s2, s10, x13) {
    var x16;
    if (b1) {
        var s3 = s2;
        var b4 = s2;
        var b5 = s3;
        var s6 = '' + (b4 !== b5);
        var x7 = Number(s6);
        x16 = !(Boolean(x7));
    } else {
        var l12 = (eval("s10")).length;
        var b14;
        if (l12 <= x13) {
            b14 = true;
        } else {
            b14 = false;
        }
        x16 = b14;
    }
    return x16;
}
fn17(input_B1, input_S1, input_S3, input_I1);
