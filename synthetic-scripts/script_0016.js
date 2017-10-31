// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((5 - len(str(not(((if input_bool('B1') then len(str(int(bool(str(not(not(not(input_bool('B1'))))))))) else (int(input_bool('B1')) % int(str(int((input_bool('B3') || not(input_bool('B1')))))))) < input_int('I2'))))))) then input_string('S1') else str(input_int('I2')))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn44 = Function('b1', 'b15', 'x27', 's38', "var x39 = x27; var e33 = \"var b12 = b1; var b2 = b1; var x26; if (b1) { var b3 = !(b2);var b6 = !(eval(\\\"!(b3)\\\"));var x9 = +(('' + (b6)) ? true : false);var s10 = '' + (x9); x26 = (s10).length; } else { var b17 = b12; var e13 = \\\"b12\\\";var b19; if (eval(\\\"b15\\\") || !(b17)) { b19 = true; } else { b19 = false; }var x21 = (b19) | 0;var s22 = '' + (x21); x26 = (~~(eval(e13)) % parseInt(s22, 10)); }var b28 = x26 < x27;var s31 = String(!(b28));var l32 = (s31).length;l32\";x34 = 5; x35 = eval(e33);var b36 = Boolean(x34 - x35);var x43; if (eval(\"b36\")) {  x43 = s38; } else { var e40 = \"x39\"; x43 = String(eval(\"eval(e40)\")); } return x43;");
fn44(input_B1, input_B3, input_I2, input_S1);
