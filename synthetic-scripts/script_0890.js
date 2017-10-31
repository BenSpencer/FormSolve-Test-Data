// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (str((bool(str((if bool(len(input_string('S3'))) then input_int('I1') else int(input_bool('B3'))))) == bool(str(input_int('I3'))))) in ['6J', '', 'J3']) then bool(input_string('S1')) else false) then true else ((if bool((int(input_bool('B2')) + input_int('I3'))) then (if bool(int(input_string('S3'))) then input_bool('B2') else (input_int('I3') != input_int('I1'))) else input_bool('B1')) && bool(int(input_string('S3')))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

(function (b40, x35, b5, x10, b23, s1, s19) {
    var s30 = s1;
    var x4 = x35;
    var x25 = x10;
    var x7;
    if (((s1).length) ? true : false) {
        x7 = x4;
    } else {
        x7 = ~~ (b5);
    }
    var s11 = String(x10);
    var b13 = ((x7).toString()) ? true : false;
    var b14 = (s11) ? true : false;
    var opts17 = ['6J', '', 'J3'];
    var x22;
    if (opts17.indexOf('' + (b13 == b14)) > -1) {
        var e20 = "s19";
        var b21 = !! (eval(e20));
        x22 = b21;
    } else {
        x22 = false;
    }
    var x51;
    if (x22) {
        x51 = true;
    } else {
        var s43 = s30;
        var e48 = "var x44 = parseInt(s43, 10);var e46 = \"eval(\\\"x44\\\")\";var b47 = (eval(e46)) ? true : false;b47";
        var b49 = eval("var b33 = b23; var x34 = x25; var x24 = ~~(b23);(eval(\"((x24 + x25)) ? true : false\") ? eval(\"var b32 = !!(parseInt(s30, 10));var b36 = x34 != x35;var x38; if (b32) {  x38 = b33; } else { x38 = b36; }x38\") : b40)");
        var b50 = eval(e48);
        x51 = b49 && b50;
    }
    return x51;
})(input_B1, input_I1, input_B3, input_I3, input_B2, input_S3, input_S1);
