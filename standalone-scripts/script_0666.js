// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') != (input_bool('B2') == not(input_bool('B3')))) then input_int('I2') else int(not((not(not(bool(((int(input_string('S2')) + (if input_bool('B3') then input_int('I2') else int(("Lp" <= input_string('S1'))))) / 10)))) === (bool(str(input_bool('B3'))) == (input_int('I3') < input_int('I1')))))))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn46 = function (b2, x33, s10, x13, s14, x31, b1, b12) {
    var x9 = x13;
    var b3 = b12;
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var b5 = b2;
    var b6 = b4;
    var b7;
    if (b1) {
        b7 = !b5 == b6;
    } else {
        b7 = b5 == b6;
    }
    var b28 = b12;
    var x11 = parseInt(s10, 10);
    var b15 = "Lp" <= s14;
    var x17 = (b15) ? 1 : 0;
    var x18;
    if (b12) {
        x18 = x13;
    } else {
        x18 = x17;
    }
    x23 = (x11 + eval("eval(\"x18\")"));
    x24 = 10;
    var b26;
    if ((x23 / x24) ? true : false) {
        b26 = false;
    } else {
        b26 = true;
    }
    var b27 = !(b26);
    var b30 = Boolean('' + (b28));
    var b38;
    if (b30) {
        b38 = (eval("x31") < eval("eval(\"x33\")"));
    } else {
        b38 = !(eval("x31") < eval("eval(\"x33\")"));
    }
    var e40 = "b38";
    var b41 = false;
    if (b27 === eval(e40)) {
        b41 = true;
    }
    var b43 = !(b41);
    return (b7 ? x9 : (b43) ? 1 : 0);
}
fn46(input_B2, input_I1, input_S2, input_I2, input_S1, input_I3, input_B1, input_B3);
