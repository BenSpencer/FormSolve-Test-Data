// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then (if input_bool('B1') then bool(input_string('S1')) else bool(int((int((input_string('S1') !== str(input_int('I3')))) >= input_int('I2'))))) else bool(int(not(bool(str(int((bool(input_string('S1')) == true)))))))) then "n" else input_string('S1'))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn35(x13, s21, b1, x8) {
    var b2 = b1;
    var s3 = s21;
    var s7 = s3;
    var e6 = "var e4 = \"s3\";var b5 = !!(eval(e4));b5";
    var x34;
    if (b1) {
        x34 = (b2 ? eval(e6) : eval("var b10 = s7; var b11 = String(x8);var b14 = +(b10 !== b11); var b15 = x13;var e16 = \"b14 >= b15\";var b18 = (~~(eval(e16))) ? true : false;b18"));
    } else {
        x34 = eval("var e23 = \"(s21) ? true : false\";var b24; if (eval(e23) == true) { b24 = true; } else { b24 = false; }var e27 = \"(b24) ? 1 : 0\";var b29 = !!(String(eval(e27)));var x31 = (!(b29)) ? 1 : 0;var b32 = Boolean(x31);b32");
    }
    return x34;
}
var fn42 = Function('x39', 's37', 'x36', 'b38', "var s40 = s37;  return (fn35(x36, s37, b38, x39) ? \"n\" : s40);");
fn42(input_I3, input_S1, input_I2, input_B1);
