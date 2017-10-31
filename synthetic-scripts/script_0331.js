// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((int(str(len(str(bool(input_string('S2')))))) <= input_int('I1')))) then input_string('S2') else replace((if (input_string('S1') > "sY") then input_string('S1') else str((int(input_string('S1')) % len(str(input_bool('B3')))))), "K", "n"))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn35 = Function('s15', 'x9', 's1', 'b21', "var s14 = s1; var b10 = eval(\"var e6 = \\\"var b2 = !!(s1);var s5 = '' + (((b2).toString()).length);s5\\\";var x7 = Number(eval(e6));x7\") <= x9;var b12; if (b10) { b12 = false; } else { b12 = true; }var s18 = s15; var s19 = s15; var b16; if (s15 > \"sY\") { b16 = true; } else { b16 = false; }var x32; if (b16) { x32 = s18; } else { var x20 = Number(s19);var e28 = \"(eval(\\\"eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"var e22 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"b21\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";(eval(e22)).toString()\\\\\\\\\\\\\\\")\\\\\\\")\\\")).length\";x29 = x20; x30 = eval(e28);var s31 = (x29 % x30).toString(); x32 = s31; }var s33 = (x32).replace(\"K\", \"n\"); return (!(b12) ? s14 : s33);");
fn35(input_S1, input_I1, input_S2, input_B3);
