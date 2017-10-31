// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_int('I2') else int((if bool(str((if input_bool('B1') then (input_bool('B3') || input_bool('B2')) else (0 > input_int('I2'))))) then not(input_bool('B2')) else ("" < (if bool(input_string('S2')) then input_string('S1') else str(input_bool('B1')))))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn32(x2, s20, b1, b16, b21, s18) {
    var x8 = x2;
    var b4 = b1;
    var x31;
    if (b1) {
        x31 = x2;
    } else {
        var x29 = Number(eval("var b3 = b21; var b5 = b16; var b9; if (0 > x8) { b9 = true; } else { b9 = false; }var x11; if (b3) { var b6; if (b5) { b6 = true; } else {  b6 = b4; } x11 = b6; } else { x11 = b9; }var e12 = \"x11\";var s13 = (eval(e12)).toString();var b14 = Boolean(s13);var e15 = \"b14\";var b19 = Boolean(s18);var s22 = '' + (b21);var b24; if (\"\" < (b19 ? s20 : s22)) { b24 = true; } else { b24 = false; }var x27; if (eval(e15)) { var b17; if (b16) { b17 = false; } else { b17 = true; } x27 = b17; } else { x27 = eval(\"b24\"); }x27"));
        x31 = eval("x29");
    }
    return x31;
}
fn32(input_I2, input_S1, input_B3, input_B2, input_B1, input_S2);
