// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(regex-test(input_string('S1'), /^(I[a-z]|fz)*$/)) !== (int(not(input_bool('B3'))) > input_int('I1'))) then str((input_bool('B3') && false)) else str((input_int('I3') / 0)))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn24(x17, b12, s1, x7) {
    var b4 = b12;
    var b3;
    if ((s1).match(/^(I[a-z]|fz)*$/) !== null) {
        b3 = false;
    } else {
        b3 = true;
    }
    var b5;
    if (b4) {
        b5 = false;
    } else {
        b5 = true;
    }
    var x6 = Number(b5);
    var b10 = b3;
    var b11 = (x6 > x7);
    var e22 = "var e20 = \"x18 = x17 / 0;x18\";(eval(e20)).toString()";
    var x23;
    if (b10 !== b11) {
        var b13;
        if (b12) {
            b13 = false;
        } else {
            b13 = false;
        }
        var s15 = '' + (b13);
        var e16 = "s15";
        x23 = eval(e16);
    } else {
        x23 = eval(e22);
    }
    return x23;
}
fn24(input_I3, input_B3, input_S1, input_I1);
