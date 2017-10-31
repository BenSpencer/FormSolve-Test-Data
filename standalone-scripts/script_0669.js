// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then len(str((input_int('I3') * input_int('I3')))) else int(bool(str(bool(len(input_string('S2')))))))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn18 = Function('b1', 's9', 'x3', "var e2 = \"b1\";var x17; if (eval(e2)) { var x4 = x3; x5 = x3; x6 = x4;var l8 = ('' + (x5 * x6)).length; x17 = l8; } else { var e12 = \"var l10 = (s9).length;!!(l10)\";var s13 = (eval(e12)).toString();var b14 = (s13) ? true : false;var e15 = \"b14\";var x16 = Number(eval(e15)); x17 = x16; } return x17;");
fn18(input_B2, input_S2, input_I3);
