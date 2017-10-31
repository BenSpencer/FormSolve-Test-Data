// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(not((bool(str(not((int(bool(str(input_int('I3')))) === int(input_bool('B2')))))) == input_bool('B3'))))) then input_bool('B3') else bool(str(int(bool(int((len(input_string('S2')) !== input_int('I2'))))))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn35(b13, s21, x23, x1, b6) {
    var b20 = b13;
    var x5 = ( !! ((eval("x1")).toString())) | 0;
    var x7 = (b6) ? 1 : 0;
    var b8 = false;
    if (x5 === x7) {
        b8 = true;
    }
    var s11 = String(!(b8));
    var b12 = (s11) ? true : false;
    var b14 = b12 == b13;
    var b16 = !(b14);
    var e19 = "Boolean((b16).toString())";
    var b25 = false;
    if ((s21).length !== eval("x23")) {
        b25 = true;
    }
    var b28 = !! ((b25) ? 1 : 0);
    var x30 = (eval("b28")) ? 1 : 0;
    var s31 = String(x30);
    var b33 = (eval("s31")) ? true : false;
    var x34;
    if (eval(e19)) {
        x34 = b20;
    } else {
        x34 = b33;
    }
    return x34;
}
fn35(input_B3, input_S2, input_I2, input_I3, input_B2);
