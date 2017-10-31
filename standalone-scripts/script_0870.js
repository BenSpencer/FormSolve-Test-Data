// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then bool(len(str(input_bool('B3')))) else not(not(not((not((str(bool(int((int(bool(input_int('I1'))) < int(input_bool('B3')))))) !== (str(input_int('I2')) + input_string('S1')))) !== bool(int(not(bool(int(str(int(input_bool('B3')))))))))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn50 = Function('s1', 'x8', 'x20', 'b12', "var b3 = b12; var s23 = s1; var l6 = (eval(\"var s4 = String(b3);s4\")).length;var x49; if (Boolean(s1)) { x49 = !!(l6); } else { x49 = eval(\"var e45 = \\\"var b32 = b12; var b9 = (x8) ? true : false;var x14 = ~~(eval(\\\\\\\"b12\\\\\\\"));var b15 = eval(\\\\\\\"+(b9)\\\\\\\") < x14;var b18 = Boolean((b15) ? 1 : 0);var e25 = \\\\\\\"var e24 = \\\\\\\\\\\\\\\"s23\\\\\\\\\\\\\\\";eval(e24)\\\\\\\";var x26 = eval(\\\\\\\"var s21 = '' + (x20);s21\\\\\\\"); var x27 = eval(e25);var e30 = \\\\\\\"('' + (b18) !== x26 + x27)\\\\\\\";var x33 = +(b32);var e35 = \\\\\\\"String(x33)\\\\\\\";var b39; if ((eval(\\\\\\\"Number(eval(e35))\\\\\\\")) ? true : false) { b39 = false; } else { b39 = true; }var b44; if ((!(eval(e30)) !== (~~(b39)) ? true : false)) { b44 = false; } else { b44 = true; }b44\\\";!(!(eval(e45)))\"); } return x49;");
fn50(input_S1, input_I1, input_I2, input_B3);
