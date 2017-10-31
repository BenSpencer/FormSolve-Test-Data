// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((if input_bool('B2') then int(not((input_bool('B2') && ((if input_bool('B2') then (str(regex-test(input_string('S1'), /^kWP[-_ ]Hr(.?|wjj)d$/)) == str(input_bool('B1'))) else false) === (if false then bool(input_string('S1')) else bool((if not(((input_bool('B1') && input_bool('B1')) != bool(int(bool(input_int('I2')))))) then int(input_string('S2')) else input_int('I3')))))))) else input_int('I2'))) === str(input_int('I3'))) then "" else input_string('S2'))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn54 = Function('b18', 'x33', 's31', 's16', 'b1', 'x22', "var s52 = s31; var x48 = x33; var s46 = String(eval(\"var x43 = x22; var b3 = b1; var e2 = \\\"b1\\\";var b5 = b3; var e4 = \\\"b3\\\";var b9 = b18; var s6 = s16; var s8 = String((s6).match(/^kWP[-_ ]Hr(.?|wjj)d$/) !== null);var e12 = \\\"(eval(\\\\\\\"b9\\\\\\\")).toString()\\\";var b13 = false; if (s8 == eval(e12)) { b13 = true; }var x15; if (b5) { x15 = b13; } else { x15 = false; }var b17 = Boolean(s16);var x36; if (false) { x36 = b17; } else { var b19 = b18; var b20; if (b19) { b20 = b18; } else { b20 = false; }var e23 = \\\"x22\\\";var e24 = \\\"eval(e23)\\\";var x26 = ((eval(e24)) ? true : false) ? 1 : 0;var b28 = b20 != !!(x26);var b30; if (b28) { b30 = false; } else { b30 = true; }var x34; if (b30) { var x32 = Number(s31); x34 = x32; } else {  x34 = x33; }var b35 = !!(x34); x36 = b35; }var b37 = x15; var b38 = x36;var b39 = false; if (eval(e4) && b37 === b38) { b39 = true; }var b41; if (b39) { b41 = false; } else { b41 = true; }var x42 = +(b41);var x44; if (eval(e2)) { x44 = x42; } else {  x44 = x43; }x44\"));var e47 = \"s46\";var b50 = false; if (eval(e47) === String(x48)) { b50 = true; }var x53; if (b50) {  x53 = \"\"; } else {  x53 = s52; } return x53;");
fn54(input_B1, input_I3, input_S2, input_S1, input_B2, input_I2);
