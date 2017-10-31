// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (input_bool('B2') == bool(str(not((not((int(not(input_bool('B3'))) === input_int('I3'))) === input_bool('B3')))))) else (int((input_int('I1') < input_int('I2'))) === (int((int(not(not(input_bool('B1')))) == input_int('I1'))) % input_int('I1'))))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn40 = function (x21, b11, b2, b1, x22, x7) {
    var b26 = b1;
    var e3 = "b2";
    var b4 = b11;
    var b5;
    if (b4) {
        b5 = false;
    } else {
        b5 = true;
    }
    var x6 = Number(b5);
    var b10;
    if ((x6 === x7)) {
        b10 = false;
    } else {
        b10 = true;
    }
    var e13 = "eval(\"b11\")";
    var b14;
    if (b10 === eval(e13)) {
        b14 = true;
    } else {
        b14 = false;
    }
    var b18 = Boolean((!(b14)).toString());
    var b19 = eval(e3) == b18;
    var x30 = x21;
    var b23 = x21 < x22;
    var x25 = (b23) ? 1 : 0;
    var x34 = x30;
    var b27 = !(b26);
    var x29 = (!(b27)) | 0;
    var b31 = false;
    if (x29 == x30) {
        b31 = true;
    }
    var x33 = ~~ (b31);
    x35 = x33 % x34;
    var b37;
    if (x25 === x35) {
        b37 = true;
    } else {
        b37 = false;
    }
    return (b1 ? b19 : b37);
}
fn40(input_I1, input_B3, input_B2, input_B1, input_I2, input_I3);
