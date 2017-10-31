// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B1') then (bool(int((((str(not((bool(input_int('I2')) != bool(str(input_bool('B1')))))) < "L6") && input_bool('B2')) != bool(str(len(str(input_bool('B2')))))))) != true) else (str(input_bool('B1')) != str(input_bool('B2'))))) then (input_int('I1') <= input_int('I1')) else bool(input_string('S3')))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn44 = Function('x37', 'b14', 'x2', 's41', 'b1', "var b31 = b14; var b29 = b1; var b4 = b1; var b18 = b14; var b7; if (Boolean(x2)) { if (!!((b4).toString())) { b7 = false; } else { b7 = true; } } else { if (!!((b4).toString())) { b7 = true; } else { b7 = false; } }var s11 = (!(eval(\"b7\"))).toString();var b15 = false; if ((s11 < \"L6\") && b14) { b15 = true; }var l20 = ('' + (b18)).length;var s21 = (l20).toString();var x25 = ((eval(\"b15\") != Boolean(s21))) | 0;var b27; if (Boolean(x25) != true) { b27 = true; } else { b27 = false; }var b33; if (String(b29) != (b31).toString()) { b33 = true; } else { b33 = false; }var b36 = !((b1 ? b27 : b33));var x43; if (b36) { var x38 = x37; var b39; if (x37 <= x38) { b39 = true; } else { b39 = false; } x43 = b39; } else {  x43 = Boolean(s41); } return x43;");
fn44(input_I1, input_B2, input_I2, input_S3, input_B1);
