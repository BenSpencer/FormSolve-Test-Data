// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_bool('B3') else (input_int('I2') < int((if (input_int('I1') !== int(input_bool('B2'))) then not((if (bool(input_int('I2')) == bool(len(input_string('S2')))) then bool(str(input_bool('B3'))) else input_bool('B2'))) else not(bool(input_int('I2')))))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn44 = Function('b1', 'b34', 'x36', 's33', 'x32', "var b2 = b1; var b35 = b1; var x4 = x36; var e38 = \"eval(\\\"(function(x5, s14, b23, b19, x11) { var x27 = x11; var b7 = b23; var e6 = \\\\\\\"x5\\\\\\\";var b9 = false; if (eval(e6) !== Number(b7)) { b9 = true; }var x30; if (b9) { var e13 = \\\\\\\"(x11) ? true : false\\\\\\\";var l15 = (s14).length;var b17 = false; if (eval(e13) == !!(l15)) { b17 = true; }var s21 = '' + (eval(\\\\\\\"b19\\\\\\\"));var b22 = Boolean(s21);var x24; if (b17) { x24 = b22; } else {  x24 = b23; }var e25 = \\\\\\\"x24\\\\\\\";var b26; if (eval(e25)) { b26 = false; } else { b26 = true; } x30 = b26; } else { var b29 = !(!!(x27)); x30 = b29; } return x30; })(x32, s33, b34, b35, x36) \\\")\";var x39 = +(eval(e38));var e42 = \"(x4 < x39)\";var x43; if (b1) { var e3 = \"b2\"; x43 = eval(e3); } else { x43 = eval(e42); } return x43;");
fn44(input_B3, input_B2, input_I2, input_S2, input_I1);
