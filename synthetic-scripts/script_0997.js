// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then input_string('S2') else str((if input_bool('B2') then not(input_bool('B2')) else ((int(("hqO" != input_string('S3'))) <= int(str((input_int('I3') !== len(str(input_int('I3'))))))) !== input_bool('B1')))))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn32(b23, s7, b4, s1, x11) {
    var e3 = "eval(\"s1\")";
    var b5 = b4;
    var x29;
    if (b4) {
        var b6 = !(b5);
        x29 = b6;
    } else {
        var e28 = "eval(\"eval(\\\"var b8 = \\\\\\\"hqO\\\\\\\"; var b9 = s7;var x10 = (b8 != b9) ? 1 : 0;var x13 = x11; var b16 = false; if (eval(\\\\\\\"x11\\\\\\\") !== ((x13).toString()).length) { b16 = true; }var e19 = \\\\\\\"String(b16)\\\\\\\";var x20 = Number(eval(e19));var b21 = x10 <= x20;(b21 !== b23)\\\")\")";
        x29 = eval(e28);
    }
    var x31;
    if (true) {
        x31 = eval(e3);
    } else {
        x31 = (x29).toString();
    }
    return x31;
}
fn32(input_B1, input_S3, input_B2, input_S2, input_I3);
