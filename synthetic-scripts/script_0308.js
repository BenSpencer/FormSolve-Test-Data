// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then true else not(bool(str(bool(str((not(bool(int(bool(str(int(not(((input_int('I1') - int(str(input_bool('B1')))) === input_int('I3'))))))))) && (regex-test(str((str((input_bool('B1') == bool(input_string('S1')))) > input_string('S2'))), /^oMhSnsoa(F|_xW)?ulHn[0-9]$/) || bool((input_int('I1') * len(input_string('S1'))))))))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn52 = Function('s30', 'b24', 'x3', 'x13', 'b1', 's25', "var x35 = x3; var b4 = b24; var e9 = \"var e8 = \\\"var e5 = \\\\\\\"b4\\\\\\\";var s7 = '' + (eval(\\\\\\\"eval(e5)\\\\\\\"));s7\\\";eval(e8)\";var x10 = Number(eval(e9));x11 = x3; x12 = x10;var b14 = x11 - x12 === x13;var b16; if (b14) { b16 = false; } else { b16 = true; }var x17 = (b16) ? 1 : 0;var e18 = \"x17\";var x21 = (!!(String(eval(e18)))) | 0;var b22 = Boolean(x21);var s36 = s25; var s29 = String((b24 == Boolean(s25)));var b31 = s29; var b32 = s30;var s33 = String(b31 > b32);var re34 = new RegExp(\"^oMhSnsoa(F|_xW)?ulHn[0-9]$\");var b42 = re34.test(s33); var b43 = Boolean((x35 * (eval(\"s36\")).length));var b44; if (!(b22)) { b44 = b42 || b43; } else { b44 = false; }var s46 = String(b44);var s48 = String((s46) ? true : false); return (!(b1) ? true : !((s48) ? true : false));");
fn52(input_S2, input_B1, input_I1, input_I3, input_B2, input_S1);
