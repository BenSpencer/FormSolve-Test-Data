// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(((if bool(input_int('I3')) then (str(int(bool(str(not(((input_int('I3') == 1) != bool(input_int('I3')))))))) in ['LpK', '', '', 'j4Pl', 'aI', 'Gnk', 'pS6c', 'OKPT', '8h', 'B']) else regex-test(str(int(input_bool('B1'))), /^(\Sn|\t)[0-9]*\tG$/)) === ((not(bool((input_int('I1') * input_int('I2')))) != input_bool('B3')) == not(input_bool('B3')))))) then int(input_string('S3')) else int(bool(str((if bool(input_string('S1')) then input_bool('B1') else not(input_bool('B2')))))))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn61(x29, s48, b53, b21, b37, x28, s50, x1) {
    var b52 = b21;
    var x3 = x1;
    var b2 = Boolean(x1);
    var e23 = "(b21) | 0";
    var e24 = "eval(e23)";
    var s25 = '' + (eval(e24));
    var x27;
    if (b2) {
        x27 = eval("var x7 = x3; var e6 = \"var b4 = x3; var b5 = 1;b4 == b5\";var e9 = \"(x7) ? true : false\";var b10; if (eval(e6)) { if (eval(e9)) { b10 = false; } else { b10 = true; } } else { if (eval(e9)) { b10 = true; } else { b10 = false; } }var b12 = !(b10);var b14 = !!((b12).toString());var x15 = +(b14);var s16 = String(x15);var opts18 = ['LpK', '', '', 'j4Pl', 'aI', 'Gnk', 'pS6c', 'OKPT', '8h', 'B'];var b17 = false; for (var idx19 = 0; idx19 < opts18.length; idx19++) { if (opts18[idx19] == s16) { b17 = true; } }b17");
    } else {
        x27 = (s25).match(/^(\Sn|\t)[0-9]*\tG$/) !== null;
    }
    var b40 = b37;
    var b36;
    if (eval("(eval(\"var e32 = \\\"(x28 * x29)\\\";eval(e32)\")) ? true : false")) {
        b36 = false;
    } else {
        b36 = true;
    }
    var b38;
    if (b36 != b37) {
        b38 = true;
    } else {
        b38 = false;
    }
    var b41;
    if (b40) {
        b41 = false;
    } else {
        b41 = true;
    }
    var b42;
    if (b38) {
        b42 = b41;
    } else {
        b42 = !b41;
    }
    var b47 = (+((x27 === b42))) ? true : false;
    var x60;
    if (b47) {
        x60 = parseInt(s48, 10);
    } else {
        var x56;
        if ((s50) ? true : false) {
            x56 = b52;
        } else {
            var e54 = "b53";
            var b55;
            if (eval(e54)) {
                b55 = false;
            } else {
                b55 = true;
            }
            x56 = b55;
        }
        var x59 = ( !! ((x56).toString())) | 0;
        x60 = x59;
    }
    return x60;
}
fn61(input_I2, input_S3, input_B2, input_B1, input_B3, input_I1, input_S1, input_I3);
