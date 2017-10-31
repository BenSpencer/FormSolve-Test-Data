// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(input_string('S2')) < int(regex-test(str(input_int('I3')), /^(E|PSXG\dTdcMq[a-z]*)$/))) then str((if not((96 < (if (if bool(str((not(bool(len(input_string('S3')))) === (str(bool(str(int(bool(input_int('I2')))))) > str(int(input_bool('B2'))))))) then (str(bool(input_string('S3'))) == str(input_int('I2'))) else input_bool('B2')) then 1 else 1))) then int(str(input_bool('B3'))) else len(input_string('S1')))) else input_string('S1'))

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn56(b22, s11, b44, x3, s47, x16, s1) {
    var s54 = s47;
    var e7 = "eval(\"((x3).toString()).match(/^(E|PSXG\\\\dTdcMq[a-z]*)$/) !== null\")";
    var x55;
    if (((s1).length < (eval(e7)) ? 1 : 0)) {
        x55 = (eval("var x34 = x16; var b38 = b22; var s31 = s11; var e12 = \"s11\";var l13 = (eval(e12)).length;var b15 = !(Boolean(l13));var x18 = ~~(!!(x16));var s19 = '' + (x18);var s24 = String((b22) | 0);var b25; if (((s19) ? true : false).toString() > s24) { b25 = true; } else { b25 = false; }var b27 = b15; var b28 = b25;var x39; if ((String(b27 === b28)) ? true : false) { var s33 = (Boolean(s31)).toString();var b36 = s33; var b37 = (x34).toString(); x39 = b36 == b37; } else {  x39 = b38; }var x40; if (x39) {  x40 = 1; } else { x40 = 1; }var b41 = false; if (96 < x40) { b41 = true; }var b43 = !(b41);var x51; if (b43) {  x51 = parseInt(String(b44), 10); } else { var e48 = \"s47\";var l49 = (eval(e48)).length; x51 = eval(\"l49\"); }x51")).toString();
    } else {
        x55 = s54;
    }
    return x55;
}
fn56(input_B2, input_S3, input_B3, input_I3, input_S1, input_I2, input_S2);
