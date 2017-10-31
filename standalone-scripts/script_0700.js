// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(input_bool('B3')))) then (input_string('S3') >= str(int(not(bool(str(regex-test(str(len(input_string('S2'))), /^RJTqqADMe(\W|\W[A-Z]pT)+Wth\tW$/))))))) else bool(int(str((len(input_string('S2')) !== input_int('I1'))))))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn32 = Function('s21', 's6', 'x24', 'b1', "var s7 = s21; var x2 = (b1) ? 1 : 0;var e3 = \"x2\";var e23 = \"(s21).length\";var b26 = eval(e23); var b27 = eval(\"x24\");var s28 = '' + (b26 !== b27);var x29 = parseInt(s28, 10);var b30 = (x29) ? true : false;var x31; if (!((eval(e3)) ? true : false)) { var e20 = \"var b14 = (eval(\\\"String(eval(\\\\\\\"var l8 = (s7).length;('' + (l8)).match(/^RJTqqADMe(\\\\\\\\\\\\\\\\W|\\\\\\\\\\\\\\\\W[A-Z]pT)+Wth\\\\\\\\\\\\\\\\tW$/) !== null\\\\\\\"))\\\")) ? true : false;var b15 = !(b14);var s17 = (~~(b15)).toString();var b18; if (s6 >= s17) { b18 = true; } else { b18 = false; }b18\"; x31 = eval(e20); } else { x31 = b30; } return x31;");
fn32(input_S2, input_S3, input_I1, input_B3);
