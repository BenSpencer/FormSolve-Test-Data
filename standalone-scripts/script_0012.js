// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((input_string('S1') != input_string('S2'))) !== (input_bool('B3') == not(bool(int(input_bool('B2')))))) then input_string('S3') else str((input_string('S2') in ['oHL97', 'Zy8P', 'iDMHd', '61Nx', 'X'])))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");

function fn26(s19, b10, b11, s20, s1) {
    var s4 = s20;
    var e9 = "var e2 = \"s1\";var b5; if (eval(\"eval(e2)\") != s4) { b5 = true; } else { b5 = false; }!(eval(\"b5\"))";
    var x12 = Number(b11);
    var b14 = !((x12) ? true : false);
    var b15;
    if (b10) {
        if (b14) {
            b15 = true;
        } else {
            b15 = false;
        }
    } else {
        if (b14) {
            b15 = false;
        } else {
            b15 = true;
        }
    }
    var b17 = eval(e9);
    var b18 = b15;
    var opts22 = ['oHL97', 'Zy8P', 'iDMHd', '61Nx', 'X'];
    var b21 = false;
    for (var idx23 = 0; idx23 < opts22.length; idx23++) {
        if (opts22[idx23] == s20) {
            b21 = true;
            break;
        }
    }
    var s24 = (b21).toString();
    return (b17 !== b18 ? s19 : s24);
}
fn26(input_S3, input_B3, input_B2, input_S2, input_S1);
