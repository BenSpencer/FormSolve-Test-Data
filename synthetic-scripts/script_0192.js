// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ("UA" < input_string('S3')) then input_int('I2') else (int((len(input_string('S2')) > input_int('I3'))) % int(not((str(not(bool(str(len(str(int(input_bool('B3')))))))) !== str((int(str((len(str(input_int('I2'))) % int(not(bool(str(input_bool('B1')))))))) + int((if not((input_bool('B1') != bool(int(str(not(input_bool('B2'))))))) then input_string('S2') else "nNHT")))))))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn60 = Function('b14', 'x8', 's47', 'b27', 'b39', 's1', 'x23', "var x5 = x23; var e4 = \"var b2; if (\\\"UA\\\" < s1) { b2 = true; } else { b2 = false; }b2\";var s6 = s47; var e13 = \"eval(\\\"var l7 = (s6).length;var b9 = l7 > x8;(b9) | 0\\\")\";var s19 = String((eval(\"var s16 = '' + (Number(b14));s16\")).length);var b20 = Boolean(s19);var b21 = !(b20);var s22 = String(b21);var b38 = b27; var b32; if (eval(\"var s28 = '' + (b27);var b30 = Boolean(eval(\\\"s28\\\"));b30\")) { b32 = false; } else { b32 = true; }x34 = eval(\"var s24 = (x23).toString();var l25 = (s24).length;l25\"); x35 = (b32) ? 1 : 0;var x37 = parseInt('' + (x34 % x35), 10);var b40 = !(b39);var s41 = String(b40);var x42 = Number(s41);var b43 = (x42) ? true : false;var b44 = b38 != b43;var x48; if (!(b44)) {  x48 = s47; } else {  x48 = \"nNHT\"; }var x49 = Number(x48);var b53 = false; if (s22 !== String((x37 + x49))) { b53 = true; }var b55; if (b53) { b55 = false; } else { b55 = true; }var x56 = (b55) ? 1 : 0;x57 = eval(e13) % x56;var x59; if (eval(e4)) {  x59 = x5; } else { x59 = x57; } return x59;");
fn60(input_B3, input_I3, input_S2, input_B1, input_B2, input_S3, input_I2);
