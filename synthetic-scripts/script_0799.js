// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((str((input_string('S3') === str(int(bool((input_int('I3') + int(input_bool('B2')))))))) >= str(bool(input_string('S2')))))) then not(input_bool('B3')) else input_bool('B2'))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn26 = function (b22, s14, s1, x2, b24) {
    var b3 = b24;
    var x4 = +(b3);
    var s9 = String(Number( !! ((x2 + x4))));
    var b10 = s1 === s9;
    var s13 = '' + (eval("b10"));
    var e16 = "Boolean(s14)";
    var s17 = String(eval(e16));
    var b18 = s13;
    var b19 = s17;
    var b20 = !(b18 >= b19);
    var b21 = !(b20);
    var x25;
    if (b21) {
        var b23;
        if (b22) {
            b23 = false;
        } else {
            b23 = true;
        }
        x25 = b23;
    } else {
        x25 = b24;
    }
    return x25;
}
fn26(input_B3, input_S2, input_S3, input_I3, input_B2);
