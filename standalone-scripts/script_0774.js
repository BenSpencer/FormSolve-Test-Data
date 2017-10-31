// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_int('I1'))) then (if bool(int(input_bool('B1'))) then bool(input_int('I1')) else (if bool(input_string('S3')) then bool(input_int('I1')) else bool(input_string('S1')))) else input_bool('B1'))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn20(b18, x1, s9, s14) {
    var x12 = x1;
    var b4 = b18;
    var b2 = !! (x1);
    var b3 = !(b2);
    var x19;
    if (b3) {
        var x7 = x12;
        var x17;
        if (Boolean(~~(b4))) {
            x17 = !! (x7);
        } else {
            x17 = ((eval("s9")) ? true : false ? (x12) ? true : false : Boolean(s14));
        }
        x19 = x17;
    } else {
        x19 = b18;
    }
    return x19;
}
fn20(input_B1, input_I1, input_S3, input_S1);
