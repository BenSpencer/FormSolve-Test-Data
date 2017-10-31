// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') || input_bool('B3')) then str(input_int('I1')) else str((input_int('I1') * int((if ((if input_bool('B3') then input_string('S1') else str(int(input_bool('B1')))) == input_string('S1')) then input_bool('B1') else not((if (if not(bool(input_string('S1'))) then bool(len(input_string('S1'))) else (input_bool('B2') != (input_int('I1') != int(input_bool('B2'))))) then input_bool('B1') else bool(input_int('I3')))))))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

(function (b28, x39, b1, s14, b2, x29) {
    var b10 = b1;
    var x5 = x29;
    var b8 = b2;
    var b3;
    if (b2) {
        b3 = true;
    } else {
        b3 = b1;
    }
    var s6 = String(x5);
    var x49;
    if (b3) {
        x49 = s6;
    } else {
        x49 = eval("var x7 = x29; var b18 = b10; var b37 = b10; var s20 = s14; var s9 = s14; var x13; if (b8) {  x13 = s9; } else { var s12 = ((b10) ? 1 : 0).toString(); x13 = s12; }var b15; if (x13 == s14) { b15 = true; } else { b15 = false; }var s25 = s20; var e23 = \"var e22 = \\\"!!(s20)\\\";eval(e22)\";var b24; if (eval(e23)) { b24 = false; } else { b24 = true; }var l26 = (s25).length;var b27 = Boolean(l26);var b30 = b28; var b32 = x29 != (b30) ? 1 : 0;var b34; if (b28) { b34 = !b32; } else { b34 = b32; }var x36; if (b24) { x36 = b27; } else { x36 = b34; }var x41; if (x36) { x41 = eval(\"b37\"); } else {  x41 = !!(x39); }var x43; if (eval(\"b15\")) { x43 = eval(\"b18\"); } else { x43 = !(x41); }x45 = x7; x46 = +(x43);'' + (x45 * x46)");
    }
    return x49;
})(input_B2, input_I3, input_B1, input_S1, input_B3, input_I1);
