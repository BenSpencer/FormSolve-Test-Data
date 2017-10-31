// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I1') === len(input_string('S1'))) || (if true then bool(input_int('I3')) else regex-test(str(bool(len(str(int(bool(len(input_string('S1')))))))), /^(A|[A-Z])*a\SI$/))) then input_string('S3') else str(input_int('I3')))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn28 = Function('s2', 'x1', 's24', 'x25', "var x6 = x25; var s8 = s2; var b4 = false; if (x1 === (s2).length) { b4 = true; }var b22 = b4 || eval(\"var x20; if (true) { x20 = Boolean(x6); } else { var l10 = (eval(\\\"s8\\\")).length;var e13 = \\\"+(Boolean(l10))\\\";var s14 = (eval(e13)).toString();var l15 = (s14).length;var s18 = (eval(\\\"!!(l15)\\\")).toString();var re19 = new RegExp(\\\"^(A|[A-Z])*a\\\\\\\\SI$\\\"); x20 = re19.test(s18); }x20\");var x27; if (b22) { x27 = s24; } else { var s26 = String(x25); x27 = s26; } return x27;");
fn28(input_S1, input_I1, input_S3, input_I3);
