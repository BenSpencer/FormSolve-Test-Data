// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then ((if not(input_bool('B1')) then not(bool(input_int('I1'))) else false) === (if (input_bool('B3') && (if bool(int(str(int((str(not(bool(input_int('I3')))) <= input_string('S2')))))) then bool(input_string('S2')) else not(input_bool('B1')))) then input_bool('B1') else bool(input_int('I1')))) else bool((input_string('S3') + str(input_bool('B1')))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn46(s13, b1, x9, s39, x3, b8) {
    var b40 = b1;
    var e37 = "eval(\"var x31 = x3; var b25 = b1; var x7; if (!(b1)) { var b5 = !!(eval(\\\"x3\\\"));var b6 = !(b5); x7 = b6; } else {  x7 = false; }var b30 = b25; var s23 = s13; var b24 = Boolean(s23);var x27; if (!!(eval(\\\"var b10 = Boolean(x9);var b11 = !(b10);var s12 = '' + (b11);var b14 = s12; var b15 = s13;var e16 = \\\\\\\"b14 <= b15\\\\\\\";var x17 = (eval(e16)) | 0;var e19 = \\\\\\\"(x17).toString()\\\\\\\";var x20 = Number(eval(e19));x20\\\"))) { x27 = b24; } else { var b26; if (b25) { b26 = false; } else { b26 = true; } x27 = b26; }var b28; if (x27) {  b28 = b8; } else { b28 = false; }var x33; if (b28) { x33 = b30; } else { var b32 = (x31) ? true : false; x33 = b32; }var b34 = x7 === x33;b34\")";
    var x45;
    if (true) {
        x45 = eval("eval(e37)");
    } else {
        var x42 = s39;
        var x43 = (b40).toString();
        x45 = !! (x42 + x43);
    }
    return x45;
}
fn46(input_S2, input_B1, input_I3, input_S3, input_I1, input_B3);
