// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (if input_bool('B3') then input_bool('B2') else (int(((if (str(input_bool('B2')) in ['RpO2', 'f1', 'O', '4Bj', '2', 'Ffi4p', '0', 'eX', 'sfh']) then (input_bool('B1') !== input_bool('B2')) else (input_string('S1') === input_string('S1'))) || bool(input_string('S2')))) <= input_int('I2'))) then true else input_bool('B1')) then input_int('I1') else int(input_bool('B3')))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn38(s14, b10, x33, x26, b11, s19, b1) {
    var b34 = b1;
    var b31 = b10;
    var b3 = b11;
    var x25 = (eval("var b20 = Boolean(s19);var b21; if (b20) { b21 = true; } else { var b5 = b11; var opts8 = ['RpO2', 'f1', 'O', '4Bj', '2', 'Ffi4p', '0', 'eX', 'sfh'];var b7 = false; for (var idx9 = 0; idx9 < opts8.length; idx9++) { if (opts8[idx9] == (b5).toString()) { b7 = true; } }var b12 = false; if (b10 !== b11) { b12 = true; }var s15 = s14; var b16 = false; if (s14 === s15) { b16 = true; } b21 = (b7 ? b12 : b16); }eval(\"b21\")")) | 0;
    var e27 = "x26";
    var b28 = x25;
    var b29 = eval(e27);
    var x32;
    if ((eval("b1") ? eval("b3") : b28 <= b29)) {
        x32 = true;
    } else {
        x32 = b31;
    }
    var x37;
    if (x32) {
        x37 = x33;
    } else {
        x37 = eval("~~(b34)");
    }
    return x37;
}
fn38(input_S1, input_B1, input_I1, input_I2, input_B2, input_S2, input_B3);
