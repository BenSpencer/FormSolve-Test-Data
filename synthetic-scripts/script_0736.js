// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') === int(str(not((str((if true then ((2 * input_int('I2')) in [1, 1, 0, 136, 98]) else input_bool('B1'))) != str(int(not(not((input_int('I1') !== int(str((input_string('S2') !== input_string('S3')))))))))))))) then (if (input_bool('B1') || not(bool(input_string('S3')))) then input_bool('B1') else input_bool('B1')) else (bool((len(input_string('S1')) / input_int('I3'))) !== (input_string('S2') !== input_string('S3'))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn67 = Function('s52', 'x3', 'x1', 'x14', 'b10', 's16', 's15', "var s43 = s16; var s61 = s16; var b42 = b10; var s60 = s15; var x56 = x1; var x11; if (true) { var e6 = \"(2 * x3)\";var opts8 = [1, 1, 0, 136, 98];var b7 = opts8.indexOf(eval(e6)) > -1; x11 = b7; } else { x11 = b10; }var e12 = \"x11\";var s13 = '' + (eval(e12));var e20 = \"var b17 = s15 !== s16;var s19 = (b17).toString();s19\";var x21 = parseInt(eval(e20), 10);var x27 = ~~(!(!(eval(\"(x14 !== x21)\"))));var b29; if (s13 != '' + (x27)) { b29 = true; } else { b29 = false; }var e31 = \"b29\";var e32 = \"eval(e31)\";var e33 = \"eval(e32)\";var s36 = (eval(\"!(eval(e33))\")).toString();var e40 = \"(eval(\\\"x1\\\") === parseInt(s36, 10))\";var e41 = \"eval(e40)\";var x66; if (eval(e41)) { var b49 = b42; var b50 = b42; var e45 = \"Boolean(s43)\";var b46 = !(eval(e45));var b47; if (b42 || b46) { b47 = true; } else { b47 = false; }var x51; if (b47) {  x51 = b49; } else {  x51 = b50; } x66 = x51; } else { var l53 = (s52).length;var e54 = \"l53\";x57 = eval(\"eval(e54)\") / x56;var b59 = !!(x57);var b62 = false; if (s60 !== s61) { b62 = true; } x66 = (b59 !== b62); } return x66;");
fn67(input_S1, input_I2, input_I3, input_I1, input_B1, input_S3, input_S2);
