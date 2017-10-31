// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(input_string('S1')))) then str(input_int('I1')) else (if bool((if not(input_bool('B3')) then int(input_bool('B1')) else input_int('I3'))) then input_string('S1') else "PT"))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn18 = function (x5, b7, b10, s1, x12) {
    var s15 = s1;
    var b4 = !( !! (parseInt(s1, 10)));
    var x17;
    if (b4) {
        x17 = String(x5);
    } else {
        var e9 = "var b8 = !(b7);b8";
        var x13;
        if (eval(e9)) {
            x13 = ~~ (b10);
        } else {
            x13 = x12;
        }
        var b14 = Boolean(x13);
        var x16;
        if (b14) {
            x16 = s15;
        } else {
            x16 = "PT";
        }
        x17 = x16;
    }
    return x17;
}
fn18(input_I1, input_B3, input_B1, input_S1, input_I3);
