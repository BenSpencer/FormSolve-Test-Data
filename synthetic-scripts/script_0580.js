// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') && not((if bool(int(not(input_bool('B2')))) then regex-test(str(input_int('I3')), /^U([-_ ]+|Z)\shD--quLlm$/) else bool(str(input_bool('B3')))))) then int(input_bool('B3')) else input_int('I3'))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn24 = function (b3, b1, b12, x22) {
    var b20 = b12;
    var x9 = x22;
    var e2 = "b1";
    var e6 = "var b4; if (b3) { b4 = false; } else { b4 = true; }+(b4)";
    var b7 = Boolean(eval(e6));
    var x16;
    if (eval("b7")) {
        var re11 = /^U([-_ ]+|Z)\shD--quLlm$/;
        x16 = re11.test(String(x9));
    } else {
        var e13 = "b12";
        x16 = !! ((eval(e13)).toString());
    }
    var b17 = !(x16);
    var x23;
    if ((eval(e2) && b17)) {
        var x21 = (b20) ? 1 : 0;
        x23 = x21;
    } else {
        x23 = x22;
    }
    return x23;
}
fn24(input_B2, input_B1, input_B3, input_I3);
