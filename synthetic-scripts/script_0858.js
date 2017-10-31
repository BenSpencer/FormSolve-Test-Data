// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(input_string('S2')) then not(not(regex-test(input_string('S1'), /^F(\w*L|\n)\W[A-Z]b$/))) else false) then len(str(input_int('I1'))) else (if (input_int('I3') == (input_int('I1') * int(regex-test(input_string('S1'), /^([A-Z]*VaF|VLEK)qr$/)))) then int(input_string('S1')) else int(input_string('S3'))))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn34(x15, s29, s1, s17, x12) {
    var x16 = x12;
    var s4 = s17;
    var x33;
    if (eval("var re6 = /^F(\\w*L|\\n)\\W[A-Z]b$/;var b7; if (re6.test(eval(\"s4\"))) { b7 = false; } else { b7 = true; }var b9; if (eval(\"b7\")) { b9 = false; } else { b9 = true; }((eval(\"s1\")) ? true : false ? b9 : false)")) {
        x33 = ('' + (x12)).length;
    } else {
        x33 = eval("var s27 = s17; var e20 = \"var re18 = /^([A-Z]*VaF|VLEK)qr$/;+(re18.test(s17))\";var e21 = \"eval(e20)\";x23 = x16 * eval(\"eval(e21)\");var b25 = x15 == x23;var x30 = parseInt(s29, 10);var x31; if (b25) { x31 = Number(s27); } else { x31 = x30; }x31");
    }
    return x33;
}
fn34(input_I3, input_S3, input_S2, input_S1, input_I1);
