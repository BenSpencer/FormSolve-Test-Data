// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(input_bool('B2')) else (if input_bool('B1') then (len(str(input_int('I1'))) != int(not(bool(int(input_bool('B3')))))) else input_bool('B3')))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn21 = function (b1, b18, b2, x5) {
    var b4 = b1;
    var x20;
    if (b1) {
        x20 = !(b2);
    } else {
        var b8 = b18;
        var x19;
        if (b4) {
            var s6 = String(x5);
            var l7 = (s6).length;
            var e15 = "eval(\"+(!(Boolean(eval(\\\"+(b8)\\\"))))\")";
            x19 = (l7 != eval(e15));
        } else {
            x19 = b18;
        }
        x20 = x19;
    }
    return x20;
}
fn21(input_B1, input_B3, input_B2, input_I1);
