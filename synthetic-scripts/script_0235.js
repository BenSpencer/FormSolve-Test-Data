// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if bool(input_int('I3')) then input_bool('B2') else ((input_bool('B1') || input_bool('B1')) == input_bool('B3'))) != bool(input_int('I1'))) then len(str(int((str((if bool(len(input_string('S1'))) then (str(not(not(bool((input_int('I3') % int(str(len(input_string('S1'))))))))) in ['I', '', 'YhWDn', 'K5d', 'plsRY', 'B', 't2']) else bool(str(input_int('I3'))))) == str(input_int('I3')))))) else int(str(int(bool(len(input_string('S1')))))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn57(b4, x12, s16, b8, b3, x1) {
    var x21 = x1;
    var s49 = s16;
    var b2 = !! (x1);
    var b5 = b4;
    var b6 = false;
    if (b4 || b5) {
        b6 = true;
    }
    var b9 = false;
    if (b6 == b8) {
        b9 = true;
    }
    var x11;
    if (b2) {
        x11 = b3;
    } else {
        x11 = b9;
    }
    var b14 = x11 != (x12) ? true : false;
    var x56;
    if (b14) {
        x56 = (eval("var x41 = x21; var e40 = \"var x35 = x21; var s22 = s16; var l17 = (s16).length;var e18 = \\\"l17\\\";var e19 = \\\"eval(e18)\\\";var s36 = '' + (x35);var b37 = Boolean(s36);var x38; if (!!(eval(e19))) { var b28 = ((x21 % Number(String((s22).length)))) ? true : false;var b29; if (b28) { b29 = false; } else { b29 = true; }var b30 = !(b29);var s31 = (b30).toString();var opts33 = ['I', '', 'YhWDn', 'K5d', 'plsRY', 'B', 't2']; x38 = opts33.indexOf(s31) > -1; } else { x38 = b37; }(x38).toString()\";var s42 = (x41).toString();var x45 = Number((eval(e40) == s42));var s46 = (x45).toString();s46")).length;
    } else {
        var e53 = "var l50 = (s49).length;+(Boolean(l50))";
        x56 = parseInt((eval(e53)).toString(), 10);
    }
    return x56;
}
fn57(input_B1, input_I1, input_S1, input_B3, input_B2, input_I3);
