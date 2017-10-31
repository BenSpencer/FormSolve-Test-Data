// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((str(not(not((len(str((input_int('I1') - input_int('I1')))) > input_int('I1'))))) != str(input_bool('B2'))) != bool(str(not((if not((input_string('S2') === str(input_bool('B2')))) then input_bool('B1') else input_bool('B2')))))) == (replace(input_string('S3'), "EFL", "cnGlB") > str(len(input_string('S2'))))) then len(str((input_bool('B1') || input_bool('B1')))) else len(input_string('S2')))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn56 = Function('x1', 'b15', 's20', 's36', 'b27', "var s53 = s20; var b47 = b27; var s39 = s20; var b22 = b15; var x9 = x1; var x3 = x1; x5 = eval(\"x1\") - eval(\"x3\");var b10 = ((x5).toString()).length; var b11 = x9;var b12 = !(b10 > b11);var b13; if (b12) { b13 = false; } else { b13 = true; }var s14 = (b13).toString();var b17 = s14 != '' + (b15);var e19 = \"b17\";var b28 = b22; var s23 = (b22).toString();var b24 = eval(\"s20\") === s23;var b30; if ((!(b24) ? b27 : b28)) { b30 = false; } else { b30 = true; }var e31 = \"b30\";var b33 = !!('' + (eval(e31)));var b34 = false; if (eval(e19) != b33) { b34 = true; }var e38 = \"(s36).replace(\\\"EFL\\\", \\\"cnGlB\\\")\";var e42 = \"String((s39).length)\";var b43; if (eval(e38) > eval(e42)) { b43 = true; } else { b43 = false; }var b45; if (b34) { b45 = b43; } else { b45 = !b43; }var x55; if (b45) { var b48 = b47; var s51 = ((b47 || b48)).toString(); x55 = (s51).length; } else { var l54 = (s53).length; x55 = l54; } return x55;");
fn56(input_I1, input_B2, input_S2, input_S3, input_B1);
