// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str((bool(str(int(input_string('S2')))) == (input_bool('B1') !== (("bq" == input_string('S1')) == bool(str(int(input_bool('B1')))))))))) then (bool(input_string('S1')) || (if not(input_bool('B1')) then not(bool(input_int('I2'))) else bool(str(input_bool('B1'))))) else (str(input_bool('B3')) < str(input_bool('B3'))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn53 = Function('b46', 'b10', 'x35', 's1', 's11', "var b33 = b10; var s31 = s11; var e8 = \"var e5 = \\\"eval(\\\\\\\"var x2 = parseInt(s1, 10);var s3 = (x2).toString();s3\\\\\\\")\\\";var b6 = !!(eval(e5));eval(\\\"b6\\\")\";var b15 = b10; var e12 = \"s11\";var b13 = false; if (\"bq\" == eval(e12)) { b13 = true; }var x17 = ~~(eval(\"b15\"));var s18 = (x17).toString();var b19 = (s18) ? true : false;var b20; if (b13 == b19) { b20 = true; } else { b20 = false; }var b24 = false; if (eval(\"eval(e8)\") == (b10 !== b20)) { b24 = true; }var b30 = Boolean(parseInt(String(eval(\"eval(\\\"b24\\\")\")), 10));var b32 = (s31) ? true : false;var b39 = b33; var b34 = !(b33);var x43; if (b34) { var b37 = (eval(\"x35\")) ? true : false;var b38 = !(b37); x43 = b38; } else {  x43 = eval(\"var s40 = String(b39);var b41 = !!(s40);b41\"); }var b44; if (b32) { b44 = true; } else { b44 = x43; }var x52; if (b30) { x52 = b44; } else { var b48 = b46; var b50 = false; if ('' + (b46) < (b48).toString()) { b50 = true; } x52 = b50; } return x52;");
fn53(input_B3, input_B1, input_I2, input_S2, input_S1);
