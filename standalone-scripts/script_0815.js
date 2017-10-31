// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B2') then bool(input_string('S2')) else input_bool('B2'))) then bool(int((true != bool(str(bool(int(not((int(not(input_bool('B3'))) == int(str(bool(len(str(not(regex-test(str((if bool(input_int('I1')) then input_bool('B2') else (str(int(bool(len(input_string('S2'))))) in ['xs', '', '0jW', '', 'mB5']))), /^Is\W*bOU[a-z](MF|Pf)spzg$/)))))))))))))))) else input_bool('B1'))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn53 = Function('b51', 'b9', 'x17', 's2', 'b1', "var s21 = s2; var b20 = b1; var e8 = \"var b5 = b1; var b4 = !!(eval(\\\"s2\\\"));!((b1 ? b4 : b5))\";var x52; if (eval(e8)) { var x16 = ~~(eval(\"var b13; if (eval(\\\"var e10 = \\\\\\\"b9\\\\\\\";var e11 = \\\\\\\"eval(e10)\\\\\\\";eval(e11)\\\")) { b13 = false; } else { b13 = true; }var e14 = \\\"b13\\\";eval(e14)\"));var b19 = Boolean(eval(\"x17\"));var x29; if (b19) { x29 = b20; } else { var l22 = (s21).length;var b23 = Boolean(l22);var opts27 = ['xs', '', '0jW', '', 'mB5'];var b26 = opts27.indexOf((Number(b23)).toString()) > -1; x29 = b26; }var re31 = new RegExp(\"^Is\\\\W*bOU[a-z](MF|Pf)spzg$\");var e32 = \"re31.test((x29).toString())\";var b33; if (eval(e32)) { b33 = false; } else { b33 = true; }var s34 = String(b33);var b36 = !!((s34).length);var s37 = String(b36);var x39 = parseInt(eval(\"s37\"), 10);var b40 = false; if (x16 == x39) { b40 = true; }var b42; if (b40) { b42 = false; } else { b42 = true; }var s45 = '' + (!!((b42) | 0));var b47 = true; var b48 = (s45) ? true : false;var x49 = ~~(b47 != b48);var b50 = (x49) ? true : false; x52 = b50; } else { x52 = b51; } return x52;");
fn53(input_B1, input_B3, input_I1, input_S2, input_B2);
