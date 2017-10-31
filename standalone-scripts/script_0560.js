// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S3'))) then bool((if not(input_bool('B1')) then input_int('I1') else 0)) else input_bool('B3'))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn13 = function (b4, x6, s1, b11) {
    var x12;
    if (((s1).length) ? true : false) {
        var e7 = "x6";
        x12 = eval("Boolean((!(b4) ? eval(e7) : 0))");
    } else {
        x12 = b11;
    }
    return x12;
}
fn13(input_B1, input_I1, input_S3, input_B3);
