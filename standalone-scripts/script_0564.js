// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((int(str(input_int('I2'))) !== (if (((bool(input_string('S3')) != false) != bool(str(bool(input_int('I1'))))) && input_bool('B3')) then (input_int('I1') + (int(input_string('S3')) - len(str(input_int('I1'))))) else int(not(bool(str(bool(str(int(bool(input_int('I2'))))))))))))) then bool(str((if bool(input_string('S2')) then int((9 >= input_int('I3'))) else input_int('I1')))) else (input_int('I2') == int(input_bool('B3'))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn69 = Function('x51', 's48', 'b16', 'x1', 'x20', 's21', "var x56 = x20; var x60 = x1; var b62 = b16; var x31 = x1; var s2 = '' + (x1);var e3 = \"s2\";var x4 = Number(eval(e3));var x9 = x20; var s5 = s21; var b7; if (Boolean(s5) != false) { b7 = true; } else { b7 = false; }var b10 = !!(x9);var b12 = (String(b10)) ? true : false;var b14; if (b7) { b14 = !eval(\"b12\"); } else { b14 = eval(\"b12\"); }var x33 = +((x31) ? true : false);var e35 = \"(x33).toString()\";var b36 = (eval(e35)) ? true : false;var e37 = \"b36\";var s38 = String(eval(e37));var x42; if ((b14 && eval(\"b16\"))) { var x23 = x20; var e24 = \"x23\";x27 = parseInt(s21, 10); x28 = (String(eval(e24))).length;x29 = x20 + x27 - x28; x42 = x29; } else { x42 = (!(Boolean(s38))) ? 1 : 0; }var s46 = '' + (eval(\"(x4 !== x42)\"));var b50 = (eval(\"s48\")) ? true : false;var x57; if (b50) { var e52 = \"x51\";var b53 = 9; var b54 = eval(e52);var x55 = +(b53 >= b54); x57 = x55; } else {  x57 = x56; }var x64 = (eval(\"b62\")) | 0;var e65 = \"x64\";var x68; if (!!(s46)) { x68 = (String(x57)) ? true : false; } else { x68 = (eval(\"x60\") == eval(e65)); } return x68;");
fn69(input_I3, input_S2, input_B3, input_I2, input_I1, input_S3);
