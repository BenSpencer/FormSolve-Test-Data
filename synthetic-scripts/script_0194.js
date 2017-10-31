// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(input_int('I1')) then not((input_int('I2') in [-14, 65, 5, 10, 4, -86, 0, 0, 1, 0])) else input_bool('B3')) then not(input_bool('B1')) else not(bool(str(len(input_string('S1'))))))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn25 = function (s18, b13, x11, b14, x12) {
    function fn10(x3, x1, b8) {
        var b2 = !! (x1);
        var opts5 = [-14, 65, 5, 10, 4, -86, 0, 0, 1, 0];
        var b7;
        if (opts5.indexOf(x3) > -1) {
            b7 = false;
        } else {
            b7 = true;
        }
        var x9;
        if (b2) {
            x9 = b7;
        } else {
            x9 = b8;
        }
        return x9;
    }
    var b17 = !(eval("eval(\"b14\")"));
    var x24;
    if (fn10(x11, x12, b13)) {
        x24 = b17;
    } else {
        var l19 = (s18).length;
        x24 = eval("!(((l19).toString()) ? true : false)");
    }
    return x24;
}
fn25(input_S1, input_B3, input_I2, input_B1, input_I1);
