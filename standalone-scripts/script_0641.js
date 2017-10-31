// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') >= (if not(bool(input_int('I2'))) then input_string('S2') else str(not(input_bool('B2'))))) then len(str(int((not(bool(input_int('I1'))) !== not(not(input_bool('B1'))))))) else int((input_int('I3') > int(str(input_int('I2'))))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn40 = function (x32, b13, s1, x12, s11, x16, b20) {
    var x33 = x12;

    function fn10(s5, x2, b6) {
        var b3 = (x2) ? true : false;
        var x9;
        if (!(b3)) {
            x9 = s5;
        } else {
            x9 = '' + (!(b6));
        }
        return x9;
    }
    var e27 = "var b17 = Boolean(x16);var e24 = \"var e21 = \\\"b20\\\";var b22; if (eval(e21)) { b22 = false; } else { b22 = true; }!(b22)\";var b25 = eval(\"!(b17)\") !== eval(e24);b25";
    var e28 = "eval(e27)";
    var l31 = ('' + ((eval(e28)) ? 1 : 0)).length;
    var s34 = '' + (x33);
    var x35 = Number(s34);
    var b36 = x32 > x35;
    return ((s1 >= fn10(s11, x12, b13)) ? l31 : ~~(b36));
}
fn40(input_I3, input_B2, input_S1, input_I2, input_S2, input_I1, input_B1);
