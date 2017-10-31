// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(int(input_string('S3'))) then input_bool('B3') else (if not(input_bool('B2')) then not(not(input_bool('B1'))) else (true === not(not(input_bool('B3')))))) then input_bool('B3') else true)

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn25(b12, b6, s1, b9) {
    var b22 = b12;
    var b5 = b12;
    var e23 = "b22";
    var x24;
    if (((eval("parseInt(s1, 10)")) ? true : false ? b5 : eval("var b8 = !(eval(\"b6\"));var x19; if (b8) { var b10 = !(b9);var b11 = !(b10); x19 = b11; } else { x19 = eval(\"var b14 = !(!(b12));var e15 = \\\"b14\\\";var b16; if (true === eval(e15)) { b16 = true; } else { b16 = false; }b16\"); }x19"))) {
        x24 = eval(e23);
    } else {
        x24 = true;
    }
    return x24;
}
fn25(input_B3, input_B2, input_S3, input_B1);
