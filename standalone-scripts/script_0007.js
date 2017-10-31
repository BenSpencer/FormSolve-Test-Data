// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') && bool(len(str((18 > int(((not((input_bool('B2') != (input_int('I2') in [81, -54, 0]))) || (input_string('S1') != input_string('S3'))) == input_bool('B2')))))))) then input_bool('B1') else (input_bool('B2') != (input_string('S1') !== input_string('S2'))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn43 = function (s36, b19, b33, x4, s11, s12, b1) {
    var b34 = b19;
    var s35 = s11;
    var l29 = (eval("var b3 = b19; var x22 = Number((eval(\"var e17 = \\\"var opts6 = [81, -54, 0];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == x4) { b5 = true; } }var b8 = false; if (b3 != b5) { b8 = true; }var b10 = !(b8);var b13 = false; if (s11 != s12) { b13 = true; }var b15; if (b13) { b15 = true; } else { b15 = b10; }b15\\\";eval(e17)\") == b19));var b23 = false; if (18 > x22) { b23 = true; }eval(\"eval(\\\"String(b23)\\\")\")")).length;
    var b31;
    if ((l29) ? true : false) {
        b31 = eval("b1");
    } else {
        b31 = false;
    }
    var e41 = "var b37 = false; if (s35 !== s36) { b37 = true; }var b39; if (b34 != b37) { b39 = true; } else { b39 = false; }b39";
    var x42;
    if (b31) {
        x42 = b33;
    } else {
        x42 = eval(e41);
    }
    return x42;
}
fn43(input_S2, input_B2, input_B1, input_I2, input_S1, input_S3, input_B3);
