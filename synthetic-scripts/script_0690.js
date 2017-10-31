// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') !== input_int('I1')) then not((not(bool(str(not((bool(input_string('S1')) !== input_bool('B3')))))) != (bool(input_string('S2')) && not((input_bool('B2') || not(input_bool('B2'))))))) else not(bool(input_int('I1'))))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (b7, s14, b16, x1, x2, s5) {
    var x28 = x2;
    var b3;
    if (x1 !== x2) {
        b3 = true;
    } else {
        b3 = false;
    }
    var b6 = Boolean(s5);
    var b8 = b6;
    var b9 = b7;
    var b13 = !( !! ('' + (!(b8 !== b9))));
    var b23;
    if (Boolean(s14)) {
        var b17 = b16;
        var b20;
        if (b16) {
            b20 = true;
        } else {
            var e18 = "b17";
            var b19;
            if (eval(e18)) {
                b19 = false;
            } else {
                b19 = true;
            }
            b20 = b19;
        }
        b23 = !(b20);
    } else {
        b23 = false;
    }
    var b25;
    if (b13) {
        if (b23) {
            b25 = false;
        } else {
            b25 = true;
        }
    } else {
        if (b23) {
            b25 = true;
        } else {
            b25 = false;
        }
    }
    var b27 = !(b25);
    var x31;
    if (b3) {
        x31 = b27;
    } else {
        var b29 = Boolean(x28);
        x31 = !(b29);
    }
    return x31;
})(input_B3, input_S2, input_B2, input_I2, input_I1, input_S1);
