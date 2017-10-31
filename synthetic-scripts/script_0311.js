// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_string('S3') != (if (input_bool('B2') !== (input_bool('B3') || not(bool(str(len(str(int(input_string('S1'))))))))) then str(bool(input_string('S1'))) else input_string('S3'))) && true) then "1AQb" else (if false then input_string('S1') else input_string('S3')))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn40 = Function('b27', 's29', 'b30', 's1', "var s37 = s1; var s36 = s29; var s28 = s1; var fn26 = Function('b2', 's24', 's19', 'b3', \"var s4 = s19; var s8 = String(eval(\\\"Number(eval(\\\\\\\"s4\\\\\\\"))\\\"));var l10 = (eval(\\\"s8\\\")).length;var e12 = \\\"String(l10)\\\";var b13 = Boolean(eval(e12));var b14; if (b13) { b14 = false; } else { b14 = true; }var b15 = false; if (b3 || b14) { b15 = true; }var b17; if (b2 !== b15) { b17 = true; } else { b17 = false; }var e23 = \\\"var e20 = \\\\\\\"s19\\\\\\\";var b21 = Boolean(eval(e20));var s22 = '' + (b21);s22\\\";var x25; if (b17) { x25 = eval(e23); } else {  x25 = s24; } return x25;\"); var e31 = \"fn26(b27, s28, s29, b30)\";var b32 = false; if (s1 != eval(e31)) { b32 = true; }var b34; if (b32) { b34 = true; } else { b34 = false; }var x38; if (false) { x38 = s36; } else {  x38 = s37; }var x39; if (b34) {  x39 = \"1AQb\"; } else { x39 = x38; } return x39;");
fn40(input_B2, input_S1, input_B3, input_S3);
