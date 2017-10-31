// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int(str(not(bool(input_string('S3'))))))) then (int((if bool(int((if input_bool('B1') then input_bool('B3') else not((input_bool('B2') == (true || (bool(input_int('I2')) !== not(bool(input_string('S1')))))))))) then not(input_bool('B3')) else input_bool('B3'))) == int(str(bool(int(input_bool('B1')))))) else input_bool('B2'))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn46 = Function('b37', 's15', 'b10', 'b11', 'x13', 's1', "var b44 = b11; var b3; if ((s1) ? true : false) { b3 = false; } else { b3 = true; }var e7 = \"'' + (Number((b3).toString()))\";var b9 = b37; var b31 = b10; var b33 = b10; var e18 = \"var b16 = (s15) ? true : false;!(b16)\";var b20 = Boolean(x13); var b21 = eval(\"eval(e18)\");var b22; if (true || b20 !== b21) { b22 = true; } else { b22 = false; }var b24 = eval(\"b11\"); var b25 = b22;var x28; if (b9) { x28 = b10; } else { x28 = !(eval(\"b24 == b25\")); }var x29 = ~~(x28);var x35; if ((x29) ? true : false) {  x35 = !(b31); } else { x35 = eval(\"b33\"); }var s40 = '' + ((~~(b37)) ? true : false);var x41 = Number(s40); return ((eval(e7)) ? true : false ? ((x35) ? 1 : 0 == x41) : b44);");
fn46(input_B1, input_S1, input_B3, input_B2, input_I2, input_S3);
