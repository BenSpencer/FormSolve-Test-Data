// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((bool(input_string('S3')) || input_bool('B3')) || not(not(bool(int((bool(input_int('I2')) == (len(str(bool(input_string('S1')))) in [179, 0, 47, 0, 81, 68, 3, 90, 7, 10]))))))) then false else not((if not((input_int('I2') in [1, 0, 1, 1])) then true else bool(input_int('I2'))))) then input_string('S3') else str(input_int('I3')))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn37 = Function('x27', "var x33 = x27; var opts29 = [1, 0, 1, 1];var b28 = false; for (var idx30 = 0; idx30 < opts29.length; idx30++) { if (opts29[idx30] == x27) { b28 = true; } }var x36; if (!(eval(\"b28\"))) { x36 = true; } else { var e34 = \"x33\";var b35 = (eval(e34)) ? true : false; x36 = b35; } return x36;");

function fn46(x38, s1, x43, b3, s9) {
    var s41 = s1;
    var x7 = x38;
    var e19 = "var b10 = !!(s9);var e13 = \"((b10).toString()).length\";var opts15 = [179, 0, 47, 0, 81, 68, 3, 90, 7, 10];var b17; if ((x7) ? true : false) { if (opts15.indexOf(eval(e13)) > -1) { b17 = true; } else { b17 = false; } } else { if (opts15.indexOf(eval(e13)) > -1) { b17 = false; } else { b17 = true; } }b17";
    var b22 = !(((eval(e19)) ? 1 : 0) ? true : false);
    var e23 = "b22";
    var b24 = !(eval(e23));
    var x40;
    if ((eval("var b2 = (s1) ? true : false;var b4 = b2 || b3;b4") || b24)) {
        x40 = false;
    } else {
        x40 = !(fn37(x38));
    }
    var s44 = String(x43);
    var x45;
    if (x40) {
        var e42 = "s41";
        x45 = eval(e42);
    } else {
        x45 = s44;
    }
    return x45;
}
fn46(input_I2, input_S3, input_I3, input_B3, input_S1);
