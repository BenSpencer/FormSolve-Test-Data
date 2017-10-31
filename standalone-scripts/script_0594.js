// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((if (input_int('I2') in [1, 0, 45]) then input_int('I3') else len(str((input_int('I2') > len(str(input_int('I1'))))))) % 0) === input_int('I2')) then input_bool('B1') else bool(input_string('S2')))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (x1, b23, x8, x6, s24) {
    var x19 = x1;
    var x7 = x1;
    var e2 = "x1";
    var opts4 = [1, 0, 45];
    var s9 = String(x8);
    var l10 = (s9).length;
    var e11 = "l10";
    var s14 = String((x7 > eval(e11)));
    var x16;
    if (opts4.indexOf(eval(e2)) > -1) {
        x16 = x6;
    } else {
        x16 = (s14).length;
    }
    var b20 = (x16 % 0) === x19;
    var x26;
    if (eval("b20")) {
        x26 = b23;
    } else {
        var b25 = !! (s24);
        x26 = b25;
    }
    return x26;
})(input_I2, input_B1, input_I1, input_I3, input_S2);
