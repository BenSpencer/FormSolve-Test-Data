// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') || (if not(bool(input_string('S2'))) then (str(bool(str((bool(((if input_bool('B2') then input_int('I2') else len(input_string('S3'))) * len(input_string('S3')))) === (input_string('S1') in ['Y', 'i1', 'Qwr', 'mg', '3']))))) in ['YKi10', 'oP', 'I0W', '', 'r4kP', '9m6', 'tkc', 'o', 'FR9b', '3Q']) else bool((int(input_bool('B3')) + len(input_string('S1')))))) then input_string('S1') else input_string('S2'))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn10(s7, x6, b5) {
    var l8 = (s7).length;
    var x9;
    if (b5) {
        x9 = x6;
    } else {
        x9 = l8;
    }
    return x9;
}
function fn49(s2, x12, b1, s11, s19, b13, b33) {
    var s47 = s2;
    var s45 = s19;
    var e44 = "var s35 = s19; var b4; if ((s2) ? true : false) { b4 = false; } else { b4 = true; }var e32 = \"var s14 = s11; x16 = fn10(s11, x12, b13); x17 = (s14).length;var b18 = Boolean(x16 * x17);var opts21 = ['Y', 'i1', 'Qwr', 'mg', '3'];var b23 = b18; var b24 = opts21.indexOf(s19) > -1;var s25 = (b23 === b24).toString();var e27 = \\\"Boolean(s25)\\\";var opts30 = ['YKi10', 'oP', 'I0W', '', 'r4kP', '9m6', 'tkc', 'o', 'FR9b', '3Q'];var b29 = false; for (var idx31 = 0; idx31 < opts30.length; idx31++) { if (opts30[idx31] == '' + (eval(e27))) { b29 = true; } }b29\";var x34 = (b33) ? 1 : 0;var l36 = (s35).length;x37 = x34 + l36;var b41 = b1 || (b4 ? eval(e32) : (x37) ? true : false);eval(\"b41\")";
    var x48;
    if (eval(e44)) {
        x48 = eval("s45");
    } else {
        x48 = s47;
    }
    return x48;
}
fn49(input_S2, input_I2, input_B1, input_S3, input_S1, input_B2, input_B3);
