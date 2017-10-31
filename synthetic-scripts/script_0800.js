// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then int((int((not(bool(input_string('S1'))) !== bool((if input_bool('B3') then str((int(((str((if not(input_bool('B3')) then input_int('I1') else int(input_string('S3')))) <= str(((str(input_bool('B1')) > str(not(input_bool('B1')))) !== input_bool('B3')))) !== (not(not(input_bool('B3'))) || not(not(input_bool('B2')))))) === input_int('I3'))) else str(int(input_string('S3'))))))) in [1, 1, 24, 6, 36, 124, 84, 0, 91, 0])) else int(input_bool('B1')))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn65 = Function('b23', 'b34', 'x8', 'b16', 's11', 'x43', 's1', "var b62 = b16; var e55 = \"var b2 = (s1) ? true : false;var b53 = !(b2); var b54 = eval(\\\"var s47 = s11; var b4 = b23; var e5 = \\\\\\\"b4\\\\\\\";var b31 = b23; var b32 = !(b31);var b33 = !(b32);var b35 = !(b34);var b37 = !(eval(\\\\\\\"b35\\\\\\\"));var b38; if (b33) { b38 = true; } else { b38 = b37; }var b40 = false; if (eval(\\\\\\\"var b6 = b23; var e14 = \\\\\\\\\\\\\\\"var b7; if (b6) { b7 = false; } else { b7 = true; }var x12 = Number(s11);var x13; if (b7) { var e9 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"; x13 = eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"eval(e9)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"); } else { x13 = x12; }x13\\\\\\\\\\\\\\\";var s27 = (eval(\\\\\\\\\\\\\\\"var b18 = b16; var b19; if (b18) { b19 = false; } else { b19 = true; }var b21; if ((b16).toString() > (b19).toString()) { b21 = true; } else { b21 = false; }var b24 = false; if (b21 !== b23) { b24 = true; }b24\\\\\\\\\\\\\\\")).toString();var b28 = false; if (String(eval(e14)) <= s27) { b28 = true; }b28\\\\\\\") !== b38) { b40 = true; }var b44; if (Number(b40) === x43) { b44 = true; } else { b44 = false; }var s46 = '' + (b44);var x50; if (eval(e5)) { x50 = s46; } else { x50 = '' + (Number(s47)); }Boolean(x50)\\\");b53 !== b54\";var opts59 = [1, 1, 24, 6, 36, 124, 84, 0, 91, 0];var b58 = false; for (var idx60 = 0; idx60 < opts59.length; idx60++) { if (opts59[idx60] == ~~(eval(\"eval(e55)\"))) { b58 = true; } }var x63 = +(b62);var x64; if (true) { x64 = ~~(b58); } else { x64 = x63; } return x64;");
fn65(input_B3, input_B2, input_I1, input_B1, input_S3, input_I3, input_S1);
