// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((str((str(input_bool('B2')) == input_string('S2'))) > str((str((input_int('I3') * int(input_string('S2')))) > input_string('S1'))))) then input_bool('B3') else bool(str((input_string('S2') in ['', '', 'PO', '', '', 'XbQx']))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn30 = Function('b22', 's15', 'b1', 's23', 'x7', "var s3 = s23; var s9 = s3; var b4 = false; if (String(b1) == s3) { b4 = true; }var e8 = \"x7\";var b16 = ((eval(e8) * parseInt(eval(\"s9\"), 10))).toString() > s15;var b19 = '' + (b4); var b20 = String(b16);var b21; if (b19 > b20) { b21 = false; } else { b21 = true; }var x29; if (b21) {  x29 = b22; } else { var opts25 = ['', '', 'PO', '', '', 'XbQx'];var b24 = false; for (var idx26 = 0; idx26 < opts25.length; idx26++) { if (opts25[idx26] == s23) { b24 = true; break; } }var s27 = (b24).toString(); x29 = Boolean(s27); } return x29;");
fn30(input_B3, input_S1, input_B2, input_S2, input_I3);
