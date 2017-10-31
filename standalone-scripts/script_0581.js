// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then str((input_int('I3') + input_int('I3'))) else str((if (if (str(bool(("cthY" + str((if false then bool(int(input_string('S3'))) else bool(str(input_bool('B2')))))))) > input_string('S2')) then bool(input_string('S1')) else ((if input_bool('B1') then (str(not((if input_bool('B1') then true else input_bool('B3')))) >= "jelFb") else bool(input_string('S3'))) || input_bool('B1'))) then 146 else 14)))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn50(s18, s27, b32, b19, s30, b34) {
    var s41 = s18;
    var fn17 = function (s7, b12) {
        var b11 = Boolean(Number(eval("var e8 = \"s7\";eval(e8)")));
        var x16;
        if (false) {
            x16 = b11;
        } else {
            var s13 = '' + (b12);
            var e14 = "s13";
            var b15 = (eval(e14)) ? true : false;
            x16 = b15;
        }
        return x16;
    }
    var x21 = "cthY" + (fn17(s18, b19)).toString();
    var e24 = "!!(x21)";
    var e26 = "String(eval(e24))";
    var b31 = (s30) ? true : false;
    var x49;
    if ((eval(e26) > s27)) {
        x49 = b31;
    } else {
        x49 = eval("var b44 = b32; var b33 = b32; var b42 = Boolean(s41);var e45 = \"b44\";((b32 ? eval(\"var x35; if (b33) { x35 = true; } else { x35 = b34; }var b36; if (x35) { b36 = false; } else { b36 = true; }var s37 = (b36).toString();(s37 >= \\\"jelFb\\\")\") : b42) || eval(e45))");
    }
    return x49;
}
function fn60(x2, b56, b53, s51, b1, s52, s55) {
    var b54 = b1;
    var x3 = x2;
    var x59;
    if (b1) {
        x59 = String((x2 + x3));
    } else {
        var x57;
        if (fn50(s51, s52, b53, b54, s55, b56)) {
            x57 = 146;
        } else {
            x57 = 14;
        }
        var s58 = (x57).toString();
        x59 = s58;
    }
    return x59;
}
fn60(input_I3, input_B3, input_B1, input_S3, input_B2, input_S2, input_S1);
