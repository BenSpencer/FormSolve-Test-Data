// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(len(str(input_int('I3')))))) then (not((str(len(input_string('S1'))) === str(input_int('I3')))) == bool(int(str((len(input_string('S2')) + len(str(bool(input_string('S2'))))))))) else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn34(b32, s9, x1, s17) {
    var x12 = x1;
    var e4 = "var e2 = \"x1\";String(eval(e2))";
    var b8 = Boolean((((eval(e4)).length) ? true : false) ? 1 : 0);
    var l10 = (s9).length;
    var s11 = '' + (l10);
    var b16;
    if ((s11 === '' + (x12))) {
        b16 = false;
    } else {
        b16 = true;
    }
    var b29 = !! (eval("var s19 = s17; var l18 = (s17).length;var b20 = !!(s19);var e21 = \"b20\";Number('' + ((l18 + (String(eval(e21))).length)))"));
    var b30;
    if (b16) {
        b30 = b29;
    } else {
        b30 = !b29;
    }
    var x33;
    if (b8) {
        x33 = b30;
    } else {
        x33 = b32;
    }
    return x33;
}
fn34(input_B1, input_S1, input_I3, input_S2);
