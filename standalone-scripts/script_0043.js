// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_int('I3'))) then input_bool('B1') else (not((input_int('I2') == input_int('I2'))) == (true != (input_int('I3') in [9, 6, 8, 147, 19, 3, 74, 3, 0]))))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn20 = function (x1, x5, b4) {
    var x11 = x1;
    var s2 = '' + (x1);
    var x19;
    if (Boolean(s2)) {
        x19 = b4;
    } else {
        var x6 = x5;
        var b7 = x5;
        var b8 = x6;
        var b10;
        if (eval("b7 == b8")) {
            b10 = false;
        } else {
            b10 = true;
        }
        var opts13 = [9, 6, 8, 147, 19, 3, 74, 3, 0];
        var b12 = opts13.indexOf(x11) > -1;
        var b17 = false;
        if (b10 == (true != b12)) {
            b17 = true;
        }
        x19 = b17;
    }
    return x19;
}
fn20(input_I3, input_I2, input_B1);
