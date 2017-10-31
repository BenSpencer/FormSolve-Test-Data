// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((input_bool('B1') !== input_bool('B2')) !== true) && not(bool(len(input_string('S1'))))) then input_bool('B3') else (16 != int(bool(input_string('S1')))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn23(s14, b1, b2, b13) {
    var s7 = s14;
    var b9 = !! ((s7).length);
    var b11;
    if (!(b9)) {
        var b3 = b1;
        var b4 = b2;
        var b5 = b3 !== b4;
        var b6 = true;
        b11 = b5 !== b6;
    } else {
        b11 = false;
    }
    var x22;
    if (b11) {
        x22 = b13;
    } else {
        var e21 = "var b15 = Boolean(s14);var x17 = Number(eval(\"b15\"));var e18 = \"x17\";var b19 = false; if (16 != eval(e18)) { b19 = true; }b19";
        x22 = eval(e21);
    }
    return x22;
}
fn23(input_S1, input_B1, input_B2, input_B3);
