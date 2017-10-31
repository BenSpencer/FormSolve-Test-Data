// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_string('S2')) != int((input_int('I2') <= int(str(not((input_bool('B2') === (int(bool(input_int('I2'))) <= int(((true || input_bool('B3')) !== bool(input_int('I1'))))))))))))) then str(regex-test(str(input_int('I3')), /^[a-z]p(rdz|AvK\n)?$/)) else input_string('S1'))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn38(b10, x14, s1, b4, s36, x3, x32) {
    var x5 = x3;
    var e9 = "eval(\"var b6 = (x5) ? true : false;+(b6)\")";
    var b12 = false;
    if (true || eval("b10")) {
        b12 = true;
    }
    var b15 = (x14) ? true : false;
    var x18 = +((b12 !== b15));
    var b19 = false;
    if (eval(e9) <= x18) {
        b19 = true;
    }
    var b21 = b4 === b19;
    var x25 = parseInt('' + (!(b21)), 10);
    var b26 = false;
    if (x3 <= x25) {
        b26 = true;
    }
    var b29;
    if (Number(s1) != +(b26)) {
        b29 = true;
    } else {
        b29 = false;
    }
    var b31 = !(b29);
    var s33 = (x32).toString();
    var s35 = '' + ((s33).match(/^[a-z]p(rdz|AvK\n)?$/) !== null);
    var x37;
    if (b31) {
        x37 = s35;
    } else {
        x37 = s36;
    }
    return x37;
}
fn38(input_B3, input_I1, input_S2, input_B2, input_S1, input_I2, input_I3);
