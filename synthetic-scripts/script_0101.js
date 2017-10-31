// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((if not(not(not((not(bool(len(input_string('S2')))) == (regex-test(input_string('S3'), /^.k([-_ ]\t\d*|Ve)MbtPE$/) && not(((if input_bool('B2') then input_string('S1') else input_string('S1')) <= input_string('S3')))))))) then not(bool(int(input_string('S3')))) else not(bool(input_string('S1'))))) && regex-test(input_string('S3'), /^kJ bFJM(z|[a-z])?fM-$/)) then len(input_string('S1')) else int(input_bool('B3')))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (s1, s12, b11, b46, s16) {
    var s44 = s12;
    var s40 = s16;
    var s29 = s16;
    var s35 = s12;
    var e27 = "var e7 = \"var e4 = \\\"var e2 = \\\\\\\"s1\\\\\\\";var l3 = (eval(e2)).length;l3\\\";var e6 = \\\"!!(eval(e4))\\\";eval(e6)\";var b8; if (eval(e7)) { b8 = false; } else { b8 = true; }var s9 = s16; var s13 = s12; var x15; if (b11) {  x15 = s12; } else { var e14 = \"s13\"; x15 = eval(e14); }var b17 = x15; var b18 = s16;var e19 = \"b17 <= b18\";var b20; if (eval(e19)) { b20 = false; } else { b20 = true; }var b23; if (b8) { if (((s9).match(/^.k([-_ ]\\t\\d*|Ve)MbtPE$/) !== null && b20)) { b23 = true; } else { b23 = false; } } else { if (((s9).match(/^.k([-_ ]\\t\\d*|Ve)MbtPE$/) !== null && b20)) { b23 = false; } else { b23 = true; } }var b26 = !(!(b23));b26";
    var x38;
    if (!(eval(e27))) {
        x38 = eval("var b31 = Boolean(parseInt(s29, 10));var b32; if (b31) { b32 = false; } else { b32 = true; }var e33 = \"b32\";eval(e33)");
    } else {
        x38 = !(Boolean(s35));
    }
    var re41 = new RegExp("^kJ bFJM(z|[a-z])?fM-$");
    var b42 = false;
    if (!(x38) && re41.test(s40)) {
        b42 = true;
    }
    var x47 = (b46) | 0;
    var x48;
    if (b42) {
        x48 = (s44).length;
    } else {
        x48 = x47;
    }
    return x48;
})(input_S2, input_S1, input_B2, input_B3, input_S3);
