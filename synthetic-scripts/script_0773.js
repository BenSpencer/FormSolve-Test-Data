// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then ((if true then bool(int(str(input_int('I3')))) else bool(str(bool(input_string('S3'))))) != (if bool(len(str(int((if not(input_bool('B2')) then str((if input_bool('B1') then not((input_string('S1') <= input_string('S2'))) else input_bool('B1'))) else str(int(input_bool('B1')))))))) then input_bool('B1') else true)) else input_bool('B2'))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (b13, s16, b15, s1, s17, x3) {
    var s8 = s1;
    var b40 = b13;
    var x12;
    if (true) {
        var e7 = "var s4 = (x3).toString();var b6 = (Number(s4)) ? true : false;b6";
        x12 = eval(e7);
    } else {
        var s10 = '' + (Boolean(s8));
        x12 = (s10) ? true : false;
    }
    var b36 = b15;
    var b28 = b15;
    var x29 = (b28) ? 1 : 0;
    var x31;
    if (!(b13)) {
        var e26 = "var b23 = b15; var e19 = \"eval(\\\"s17\\\")\";var b22; if ((s16 <= eval(e19))) { b22 = false; } else { b22 = true; }var e24 = \"b23\";var x25; if (b15) { x25 = b22; } else { x25 = eval(e24); }x25";
        var s27 = (eval(e26)).toString();
        x31 = s27;
    } else {
        x31 = String(x29);
    }
    var l34 = (String(parseInt(x31, 10))).length;
    var b35 = Boolean(l34);
    var x37;
    if (b35) {
        x37 = b36;
    } else {
        x37 = true;
    }
    var b38 = x12;
    var b39 = x37;
    var x41;
    if ((s1) ? true : false) {
        x41 = b38 != b39;
    } else {
        x41 = b40;
    }
    return x41;
})(input_B2, input_S1, input_B1, input_S3, input_S2, input_I3);
