// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I3')) then bool(int(str(not(bool(input_string('S3')))))) else (if input_bool('B3') then (bool(input_int('I1')) || (int(bool(input_int('I1'))) != len(input_string('S3')))) else false))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn25 = function (x11, b10, x1, s16) {
    var s4 = s16;
    var b5 = !! (s4);
    var s7 = String(!(b5));
    var x8 = parseInt(s7, 10);
    var x24;
    if (Boolean(eval("x1"))) {
        x24 = (x8) ? true : false;
    } else {
        x24 = eval("var x13 = x11; var b20; if ((x11) ? true : false) { b20 = true; } else { var l17 = (s16).length;var b18 = false; if (Number(Boolean(x13)) != l17) { b18 = true; } b20 = b18; }var x22; if (b10) { x22 = b20; } else {  x22 = false; }x22");
    }
    return x24;
}
fn25(input_I1, input_B3, input_I3, input_S3);
