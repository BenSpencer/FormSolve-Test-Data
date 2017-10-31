// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool(input_string('S1')) else (str(input_int('I1')) <= str((int((if (not(((str(input_bool('B1')) == str(input_int('I2'))) && input_bool('B2'))) != input_bool('B2')) then input_bool('B1') else input_bool('B2'))) >= int(input_string('S1'))))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn38 = function (x10, s3, b14, b1, b23, x5) {
    var s30 = s3;
    var b4 = !! (s3);
    var s6 = (x5).toString();
    var b24 = b14;
    var b7 = b23;
    var b19 = b14;
    var s11 = String(x10);
    var b18 = !((((eval("b7")).toString() == s11) && eval("b14")));
    var e20 = "b19";
    var b21 = b18 != eval(e20);
    var e25 = "b24";
    var e26 = "eval(e25)";
    var x27;
    if (b21) {
        x27 = b23;
    } else {
        x27 = eval(e26);
    }
    var e29 = "+(x27)";
    var x31 = parseInt(s30, 10);
    var b32 = eval(e29) >= x31;
    var s34 = (b32).toString();
    var b35 = false;
    if (s6 <= s34) {
        b35 = true;
    }
    var x37;
    if (eval("b1")) {
        x37 = b4;
    } else {
        x37 = b35;
    }
    return x37;
}
fn38(input_I2, input_S1, input_B2, input_B3, input_B1, input_I1);
