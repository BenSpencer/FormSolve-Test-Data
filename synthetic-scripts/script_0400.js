// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') && ((if (input_int('I2') == input_int('I3')) then "p1k" else str(input_bool('B1'))) > str(not(bool(int(str(input_int('I2')))))))) then input_int('I2') else input_int('I2'))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn24 = function (x3, b1, x10) {
    var x21 = x10;
    var x22 = x10;
    var b7 = b1;
    var x2 = x10;
    var e4 = "x3";
    var x9;
    if ((x2 == eval(e4))) {
        x9 = "p1k";
    } else {
        x9 = (b7).toString();
    }
    var e12 = "var s11 = '' + (x10);s11";
    var x13 = parseInt(eval(e12), 10);
    var b14 = !! (x13);
    var b15;
    if (b14) {
        b15 = false;
    } else {
        b15 = true;
    }
    var b17 = x9 > String(b15);
    var b19 = b1 && b17;
    var x23;
    if (b19) {
        x23 = x21;
    } else {
        x23 = x22;
    }
    return x23;
}
fn24(input_I3, input_B1, input_I2);
