// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not((input_int('I1') < input_int('I3')))) === int(str(bool(input_int('I3'))))) then len(str(int((int(input_bool('B2')) != len(input_string('S1')))))) else input_int('I2'))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn31 = function (s20, x2, x1, x28, b17) {
    var x9 = x2;
    var e11 = "var b10 = Boolean(x9);b10";
    var s12 = '' + (eval(e11));
    var b14;
    if (+(eval("eval(\"var b3 = x1; var b4 = x2;var b5; if (b3 < b4) { b5 = false; } else { b5 = true; }b5\")")) === Number(s12)) {
        b14 = true;
    } else {
        b14 = false;
    }
    var e18 = "b17";
    var x19 = (eval(e18)) ? 1 : 0;
    var e21 = "s20";
    var l22 = (eval(e21)).length;
    var b23 = x19;
    var b24 = l22;
    var x25 = ~~ (b23 != b24);
    var e29 = "x28";
    var x30;
    if (eval("b14")) {
        x30 = (String(x25)).length;
    } else {
        x30 = eval(e29);
    }
    return x30;
}
fn31(input_S1, input_I3, input_I1, input_I2, input_B2);
