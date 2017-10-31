// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(not((if input_bool('B3') then (if input_bool('B2') then bool(int(bool(int(bool(str(not((input_int('I1') <= input_int('I1'))))))))) else (if not(input_bool('B3')) then false else true)) else true)))) then input_bool('B2') else input_bool('B1'))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn30 = function (b28, x3, b2, b1) {
    var b27 = b2;
    var b18 = b1;
    var x20;
    if (!(b18)) {
        x20 = false;
    } else {
        x20 = true;
    }
    var x22;
    if (b1) {
        x22 = (b2 ? Boolean((eval("var e14 = \"eval(\\\"var x5 = x3; var b6 = false; if (eval(\\\\\\\"x3\\\\\\\") <= x5) { b6 = true; }var s9 = String(!(b6));var b10 = (s9) ? true : false;!!(Number(b10))\\\")\";eval(e14)")) | 0) : x20);
    } else {
        x22 = true;
    }
    var x24 = ~~ (!(x22));
    var b25 = !! (x24);
    var e26 = "b25";
    var x29;
    if (eval(e26)) {
        x29 = b27;
    } else {
        x29 = b28;
    }
    return x29;
}
fn30(input_B1, input_I1, input_B2, input_B3);
