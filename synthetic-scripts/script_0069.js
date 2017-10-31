// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((if (str(bool(int(input_bool('B2')))) != input_string('S1')) then bool(str(bool(str((if not(regex-test(input_string('S1'), /^(pMAdxKcEG\W?Vw[A-Z]-xG|i)$/)) then not(not(not(regex-test(str(input_bool('B3')), /^(y\w|iZ)?[0-9]$/)))) else bool(input_int('I2'))))))) else (len(str((int(str(input_int('I2'))) + input_int('I1')))) < int(input_string('S1')))))) then input_int('I2') else int(input_string('S1')))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn50(s10, b13, x20, x32, b1) {
    var x45 = x20;
    var s47 = s10;
    var x29 = x20;
    var s37 = s10;
    var s7 = s10;
    var s6 = (eval("eval(\"var x2 = Number(b1);!!(x2)\")")).toString();
    var b8 = false;
    if (s6 != s7) {
        b8 = true;
    }
    var e41 = "var x31 = parseInt('' + (x29), 10);x33 = x31 + x32;var x38 = parseInt(s37, 10);((String(x33)).length < x38)";
    var x42;
    if (b8) {
        var s25 = String(eval("var re11 = new RegExp(\"^(pMAdxKcEG\\\\W?Vw[A-Z]-xG|i)$\");var b12; if (re11.test(s10)) { b12 = false; } else { b12 = true; }var e15 = \"(b13).toString()\";var b17; if ((eval(e15)).match(/^(y\\w|iZ)?[0-9]$/) !== null) { b17 = false; } else { b17 = true; }var b18 = !(b17);var b21 = !!(x20);var x22; if (b12) { x22 = !(b18); } else { x22 = b21; }eval(\"x22\")"));
        var b26 = (s25) ? true : false;
        var s27 = String(b26);
        var b28 = (s27) ? true : false;
        x42 = b28;
    } else {
        x42 = eval(e41);
    }
    var b44 = !! ((x42) ? 1 : 0);
    var x49;
    if (b44) {
        x49 = eval("x45");
    } else {
        x49 = Number(s47);
    }
    return x49;
}
fn50(input_S1, input_B3, input_I2, input_I1, input_B2);
