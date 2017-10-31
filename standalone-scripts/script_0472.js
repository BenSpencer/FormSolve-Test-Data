// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((input_string('S1') != str((if ((if (input_bool('B1') === (input_bool('B2') && not((str(len(str(bool((if regex-test(input_string('S3'), /^(M|su[A-Z]?\SSKq)$/) then input_string('S2') else input_string('S2')))))) in ['niFBH', 'M9T', 'RcYDv', 'uIiK', 'lUGci', '', '', 'E', '34'])))) then (if bool(input_int('I2')) then 0 else int(str(int(str(int(not(bool(int(input_bool('B3')))))))))) else input_int('I3')) !== int(input_bool('B1'))) then input_bool('B2') else (int(bool(input_int('I3'))) < len(input_string('S2')))))))) then input_int('I3') else int(input_bool('B2')))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn58(s4, b27, x22, b3, x40, b2, s52) {
    var s6 = s52;
    var x49 = x40;
    var b48 = b3;
    var e56 = "var x51 = Number(!!(x49));var b54; if (x51 < (s52).length) { b54 = true; } else { b54 = false; }b54";
    var x57;
    if (eval("var b42 = b2; var s7 = s6; var re5 = new RegExp(\"^(M|su[A-Z]?\\\\SSKq)$\");var x8; if (re5.test(s4)) { x8 = s6; } else {  x8 = s7; }var opts15 = ['niFBH', 'M9T', 'RcYDv', 'uIiK', 'lUGci', '', '', 'E', '34'];var b14 = false; for (var idx16 = 0; idx16 < opts15.length; idx16++) { if (opts15[idx16] == '' + (eval(\"('' + ((x8) ? true : false)).length\"))) { b14 = true; break; } }var b18; if (!(b14)) {  b18 = b3; } else { b18 = false; }var b20 = false; if (b2 === b18) { b20 = true; }var x41; if (b20) { var e25 = \"var e24 = \\\"eval(\\\\\\\"x22\\\\\\\")\\\";eval(e24)\";var e36 = \"var x28 = +(b27);var b30 = !(Boolean(x28));var x31 = Number(b30);var e33 = \\\"String(x31)\\\";var x34 = parseInt(eval(e33), 10);var e35 = \\\"x34\\\";eval(e35)\";var s37 = (eval(e36)).toString();var x38 = Number(s37);var x39; if (Boolean(eval(e25))) {  x39 = 0; } else { x39 = x38; } x41 = x39; } else {  x41 = x40; }var b45 = x41 !== eval(\"Number(b42)\");b45")) {
        x57 = b48;
    } else {
        x57 = eval(e56);
    }
    return x57;
}
function fn75(s65, s1, b64, x61, x63, b62, b60, s59) {
    var x71 = x63;
    var b72 = b62;
    var s66 = (fn58(s59, b60, x61, b62, x63, b64, s65)).toString();
    var b67 = false;
    if (s1 != s66) {
        b67 = true;
    }
    var x74;
    if ( !! ('' + (b67))) {
        x74 = x71;
    } else {
        var x73 = Number(b72);
        x74 = x73;
    }
    return x74;
}
fn75(input_S2, input_S1, input_B1, input_I2, input_I3, input_B2, input_B3, input_S3);
