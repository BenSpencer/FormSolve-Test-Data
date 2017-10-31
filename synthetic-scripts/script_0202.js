// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') !== bool(int(not((if bool(int(bool(str(input_int('I3'))))) then bool(str(input_bool('B1'))) else (input_int('I3') != 1)))))) then input_bool('B1') else false)

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn29 = function (b1, x14) {
    var b26 = b1;
    var b10 = b1;
    var x28;
    if ((eval("b1") !== eval("eval(\"var x3 = x14; var e7 = \\\"var e4 = \\\\\\\"x3\\\\\\\";var b6 = ((eval(e4)).toString()) ? true : false;b6\\\";var x8 = (eval(e7)) ? 1 : 0;var b9 = Boolean(x8);var e11 = \\\"b10\\\";var s12 = String(eval(e11));var b15 = false; if (x14 != 1) { b15 = true; }var x17; if (b9) { x17 = Boolean(s12); } else { x17 = b15; }var x20 = +(eval(\\\"!(x17)\\\"));!!(x20)\")"))) {
        var e27 = "b26";
        x28 = eval(e27);
    } else {
        x28 = false;
    }
    return x28;
}
fn29(input_B1, input_I3);
