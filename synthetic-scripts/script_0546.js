// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if regex-test(input_string('S1'), /^_hA(l[a-z]L|x)? $/) then (input_bool('B1') == not(input_bool('B2'))) else true) || input_bool('B2')) then input_int('I3') else input_int('I3'))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn15 = function (x12, b3, s1, b4) {
    var x13 = x12;
    var b9 = b4;
    var b6;
    if (b3 == !(b4)) {
        b6 = true;
    } else {
        b6 = false;
    }
    var b10;
    if (b9) {
        b10 = true;
    } else {
        b10 = ((s1).match(/^_hA(l[a-z]L|x)? $/) !== null ? b6 : true);
    }
    var x14;
    if (b10) {
        x14 = x12;
    } else {
        x14 = x13;
    }
    return x14;
}
fn15(input_I3, input_B1, input_S1, input_B2);
