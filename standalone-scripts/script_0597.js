// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if regex-test(replace(str((len(input_string('S2')) === input_int('I1'))), "", "BfUyw"), /^(GFZAL_frD[a-z]+\t|Wi)+$/) then not(input_bool('B3')) else input_bool('B3')) then input_bool('B1') else false)

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn16(b13, x3, b11, s1) {
    var b9 = b11;
    var s7 = (String(((s1).length === x3))).replace("", "BfUyw");
    var re8 = /^(GFZAL_frD[a-z]+\t|Wi)+$/;
    var x12;
    if (re8.test(s7)) {
        var b10 = !(b9);
        x12 = b10;
    } else {
        x12 = b11;
    }
    var x15;
    if (x12) {
        x15 = eval("b13");
    } else {
        x15 = false;
    }
    return x15;
}
fn16(input_B1, input_I1, input_B3, input_S2);
