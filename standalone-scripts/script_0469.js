// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') || (if not((input_bool('B1') === (if not(input_bool('B2')) then input_bool('B2') else not(not(bool(str(int(str(not(input_bool('B3'))))))))))) then input_bool('B3') else (input_bool('B1') !== bool(len(input_string('S1')))))) then regex-replace(str(bool(int(str(int(input_bool('B1')))))), /(ScVO[-_ ]|kd)+lE/, "lSYC") else input_string('S3'))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn45 = Function('s24', 'b2', 's43', 'b1', 'b3', "var b33 = b2; var b19 = b1; var b6 = b19; var b20 = b2; var b5 = b3; var x15; if (!(b3)) { x15 = b5; } else { var b7; if (b6) { b7 = false; } else { b7 = true; }var s8 = String(b7);var s10 = '' + (Number(s8));var b12 = Boolean(eval(\"s10\"));var b13; if (b12) { b13 = false; } else { b13 = true; }var b14 = !(b13); x15 = b14; }var b16; if (b2 === x15) { b16 = true; } else { b16 = false; }var b18; if (b16) { b18 = false; } else { b18 = true; }var x29; if (b18) {  x29 = b19; } else { var e22 = \"eval(\\\"b20\\\")\";var e23 = \"eval(e22)\";var b26 = Boolean((s24).length);var b27; if (eval(e23) !== b26) { b27 = true; } else { b27 = false; } x29 = b27; }var b30 = b1 || x29;var e32 = \"b30\";var e40 = \"var s36 = (eval(\\\"~~(b33)\\\")).toString();var x37 = parseInt(s36, 10);String((x37) ? true : false)\";var x44; if (eval(e32)) { x44 = (eval(e40)).replace(/(ScVO[-_ ]|kd)+lE/, \"lSYC\"); } else {  x44 = s43; } return x44;");
fn45(input_S1, input_B1, input_S3, input_B3, input_B2);
