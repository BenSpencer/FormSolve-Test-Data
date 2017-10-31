// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then (((input_int('I2') === input_int('I1')) == bool(input_string('S1'))) === (len(str((input_int('I3') <= int(not(input_bool('B1')))))) != input_int('I3'))) else bool(int(input_bool('B1'))))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn33(x3, x13, b14, x5, s1, s9) {
    var b27 = b14;
    var x32;
    if ( !! (s1)) {
        var e4 = "x3";
        var e6 = "x5";
        var b7 = eval(e4);
        var b8 = eval(e6);
        var b10 = (s9) ? true : false;
        var b11 = false;
        if (b7 === b8 == b10) {
            b11 = true;
        }
        var x22 = x13;
        var b15;
        if (b14) {
            b15 = false;
        } else {
            b15 = true;
        }
        var b17;
        if (x13 <= +(b15)) {
            b17 = true;
        } else {
            b17 = false;
        }
        var b25 = b11 === (('' + (eval("b17"))).length != x22);
        x32 = b25;
    } else {
        var x29 = Number(eval("b27"));
        var e30 = "x29";
        var b31 = !! (eval(e30));
        x32 = b31;
    }
    return x32;
}
fn33(input_I2, input_I3, input_B1, input_I1, input_S3, input_S1);
