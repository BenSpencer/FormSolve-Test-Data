// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(int(input_string('S2'))) !== input_bool('B1')) then (int(str(bool(str(bool(input_string('S3')))))) - input_int('I3')) else (input_int('I2') - len(input_string('S2'))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn26(x19, b5, s8, x16, s1) {
    var s21 = s1;
    var x2 = Number(s1);
    var b4 = !! (eval("x2"));
    var b6 = b4;
    var b7 = b5;
    var e9 = "s8";
    var e12 = "(!!(eval(e9))).toString()";
    var s14 = String(Boolean(eval(e12)));
    var x15 = Number(s14);
    x17 = x15;
    x18 = x16;
    x23 = eval("x19");
    x24 = (s21).length;
    var x25;
    if (b6 !== b7) {
        x25 = x17 - x18;
    } else {
        x25 = x23 - x24;
    }
    return x25;
}
fn26(input_I2, input_B1, input_S3, input_I3, input_S2);
