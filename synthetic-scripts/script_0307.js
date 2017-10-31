// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(int(bool(str(int(str(bool(str(int(bool((1 - input_int('I1')))))))))))) === str(input_bool('B2'))) then int(str(not(not(not((input_string('S2') < str(not((input_bool('B3') != input_bool('B3')))))))))) else int(input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn40 = Function('b21', 's20', 'b37', 'b16', 'x1', "var e9 = \"var b7 = !!((Number(!!((1 - x1)))).toString());var s8 = (b7).toString();s8\";var x10 = Number(eval(e9));var s11 = String(x10);var b12 = Boolean(s11);var e14 = \"+(b12)\";var s15 = String(eval(e14));var s17 = '' + (b16);var e28 = \"var b22 = b21; var e23 = \\\"b22\\\";var s27 = '' + (!((b21 != eval(e23))));s27\";var b31; if ((s20 < eval(e28))) { b31 = false; } else { b31 = true; }var e33 = \"!(b31)\";var b34 = !(eval(e33));var s35 = '' + (b34);var x36 = parseInt(s35, 10);var x39; if ((s15 === s17)) { x39 = x36; } else { var x38 = (b37) | 0; x39 = x38; } return x39;");
fn40(input_B3, input_S2, input_B1, input_B2, input_I1);
