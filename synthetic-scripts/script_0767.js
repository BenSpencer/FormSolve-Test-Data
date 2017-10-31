// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_bool('B3')) == input_int('I1'))) then (((input_bool('B2') != bool(input_int('I2'))) !== bool(input_int('I3'))) !== (int(bool(len(input_string('S2')))) > input_int('I1'))) else input_bool('B1'))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn32 = function (s18, x9, b1, x23, x13, b29, b8) {
    var x4 = x23;
    var x3 = (eval("b1")) ? 1 : 0;
    var b7;
    if ((x3 == x4)) {
        b7 = false;
    } else {
        b7 = true;
    }
    var b11 = b8;
    var b12 = (x9) ? true : false;
    var b14 = (x13) ? true : false;
    var b15;
    if (b11 != b12 !== b14) {
        b15 = true;
    } else {
        b15 = false;
    }
    var e19 = "s18";
    var l20 = (eval(e19)).length;
    var x22 = +((l20) ? true : false);
    var b25 = x22;
    var b26 = eval("x23");
    var b27 = eval("b15");
    var b28 = b25 > b26;
    var e30 = "b29";
    return (b7 ? b27 !== b28 : eval(e30));
}
fn32(input_S2, input_I2, input_B3, input_I1, input_I3, input_B1, input_B2);
