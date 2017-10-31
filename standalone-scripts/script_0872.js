// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(len(input_string('S2')))) then (input_bool('B1') !== input_bool('B2')) else (int(str((if (if input_bool('B3') then bool(int(input_string('S2'))) else (input_string('S3') == str(input_bool('B1')))) then bool(input_int('I1')) else (str(input_int('I2')) == str(input_bool('B3')))))) == int(input_string('S2'))))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn43 = Function('s1', 'b10', 's14', 'x24', 'b15', 'b6', 'x26', "var b5 = b15; var s11 = s1; var l2 = (s1).length;var b3 = Boolean(l2);var x42; if (!(b3)) { var e7 = \"b6\";var b8 = b5 !== eval(e7); x42 = b8; } else { var s37 = s11; var b28 = b10; var e22 = \"var x21; if (b10) { var x12 = Number(s11);var b13 = (x12) ? true : false; x21 = b13; } else { var e16 = \\\"b15\\\";var s17 = '' + (eval(e16));var b18 = s14; var b19 = s17;var e20 = \\\"b18 == b19\\\"; x21 = eval(e20); }x21\";var e23 = \"eval(e22)\";var x33; if (eval(e23)) {  x33 = Boolean(x24); } else { var s29 = '' + (b28);var b31 = '' + (x26) == eval(\"s29\"); x33 = b31; }var x36 = parseInt(String(eval(\"x33\")), 10); x42 = (x36 == Number(eval(\"s37\"))); } return x42;");
fn43(input_S2, input_B3, input_S3, input_I1, input_B1, input_B2, input_I2);
