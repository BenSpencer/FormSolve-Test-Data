// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then (if input_bool('B2') then (input_int('I2') < int(bool(int(not(bool((if regex-test(input_string('S2'), /^sRboA(eLYky-cHu|[a-z]*jzY)a$/) then input_string('S1') else "RZHB"))))))) else true) else bool(input_int('I3')))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn25 = Function('s5', 's8', 'x4', 'b3', "var x24; if (b3) { var x18 = (eval(\"eval(\\\"var e15 = \\\\\\\"var e12 = \\\\\\\\\\\\\\\"var e9 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"s8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";var x10; if (eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var re6 = /^sRboA(eLYky-cHu|[a-z]*jzY)a$/;re6.test(s5)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")) { x10 = eval(e9); } else {  x10 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"RZHB\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"; }eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x10\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\";var b13 = (eval(e12)) ? true : false;var b14 = !(b13);b14\\\\\\\";eval(e15)\\\")\")) | 0;var b19 = Boolean(x18);var x20 = ~~(b19);var b22 = x4 < eval(\"x20\"); x24 = b22; } else {  x24 = true; } return x24;");
var fn33 = Function('s26', 's27', 'x30', 'x28', 'b1', "var b29 = b1; var b2; if (b1) { b2 = false; } else { b2 = true; }var b31 = (x30) ? true : false;var x32; if (b2) { x32 = fn25(s26, s27, x28, b29); } else { x32 = b31; } return x32;");
fn33(input_S2, input_S1, input_I3, input_I2, input_B2);
