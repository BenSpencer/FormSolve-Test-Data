// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B3')) == int(str(int(str((input_int('I1') + input_int('I3'))))))) then false else (input_int('I1') <= (int(input_string('S1')) / (input_int('I1') * input_int('I2')))))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn29(x4, s17, x15, x20, b1) {
    var x3 = x15;
    var x10 = Number(String(eval("(x3 + eval(\"x4\"))")));
    var s11 = (x10).toString();
    var x12 = parseInt(s11, 10);
    var b13 = false;
    if (Number(b1) == x12) {
        b13 = true;
    }
    var x28;
    if (b13) {
        x28 = false;
    } else {
        var x19 = x15;
        x24 = Number(s17) / (x19 * eval("x20"));
        var b26 = eval("x15");
        var b27 = x24;
        x28 = b26 <= b27;
    }
    return x28;
}
fn29(input_I3, input_S1, input_I1, input_I2, input_B3);
