// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(input_string('S1')))) then (not((if input_bool('B1') then false else not((input_int('I2') != input_int('I1'))))) && not(not(bool(input_string('S2'))))) else bool(str(input_int('I2'))))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn25 = function (s14, x8, x20, s1, b6) {
    var x7 = x20;
    var e5 = "var x3 = (Boolean(s1)) ? 1 : 0;var b4 = Boolean(x3);b4";
    var x12;
    if (b6) {
        x12 = false;
    } else {
        var b9 = x7;
        var b10 = x8;
        var b11 = !(b9 != b10);
        x12 = b11;
    }
    var b15 = !! (s14);
    var b17 = !(!(b15));
    var b18 = !(x12) && b17;
    var b23 = Boolean('' + (eval("x20")));
    return (eval(e5) ? b18 : b23);
}
fn25(input_S2, input_I1, input_I2, input_S1, input_B1);
