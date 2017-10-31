// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(not(bool(input_int('I1')))) then bool(input_int('I2')) else bool(int(not(not(not(not((input_string('S3') > str(not(input_bool('B1'))))))))))) then not((if bool(int(str(bool((if (if not(input_bool('B3')) then not((regex-test(input_string('S1'), /^(pJ|[-_ ])?jx$/) == input_bool('B1'))) else (if bool(input_string('S3')) then input_bool('B3') else true)) then input_int('I1') else input_int('I3')))))) then (input_string('S1') < input_string('S3')) else not(input_bool('B3')))) else input_bool('B3'))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn25(x1, x8, b12, s11) {
    var e2 = "x1";
    var e3 = "eval(e2)";
    var e4 = "eval(e3)";
    var b5 = (eval(e4)) ? true : false;
    var b6 = !(b5);
    var b7;
    if (b6) {
        b7 = false;
    } else {
        b7 = true;
    }
    var e9 = "x8";
    var b10 = !! (eval(e9));
    var x24;
    if (b7) {
        x24 = b10;
    } else {
        var b21 = !(eval("var b13 = !(b12);var s14 = '' + (b13);var b17; if ((s11 > s14)) { b17 = false; } else { b17 = true; }var b18; if (b17) { b18 = false; } else { b18 = true; }var b19 = !(b18);b19"));
        var x22 = +(b21);
        x24 = (x22) ? true : false;
    }
    return x24;
}
var fn71 = function (b30, s29, s33, x27, b28, x49, x26) {
    var s42 = s29;
    var b35 = b28;
    var x48 = x26;
    var b69 = b30;
    var s57 = s42;
    var b63 = b30;
    var s56 = s33;
    var b44 = b30;
    var x46;
    if ((s42) ? true : false) {
        var e45 = "b44";
        x46 = eval(e45);
    } else {
        x46 = true;
    }
    var x47;
    if (eval("var b31 = !(b30);b31")) {
        var re34 = /^(pJ|[-_ ])?jx$/;
        var b39 = re34.test(s33);
        var b40 = eval("var e36 = \"b35\";eval(\"eval(e36)\")");
        var b41;
        if (b39 == b40) {
            b41 = false;
        } else {
            b41 = true;
        }
        x47 = b41;
    } else {
        x47 = x46;
    }
    var e51 = "(x47 ? x48 : x49)";
    var s53 = String(Boolean(eval(e51)));
    var x54 = parseInt(s53, 10);
    var b61 = false;
    if (s56 < eval("var e58 = \"s57\";var e59 = \"eval(e58)\";eval(e59)")) {
        b61 = true;
    }
    var e65 = "var b64 = !(b63);b64";
    var x66;
    if (Boolean(x54)) {
        x66 = b61;
    } else {
        x66 = eval(e65);
    }
    var x70;
    if (fn25(x26, x27, b28, s29)) {
        x70 = eval("!(x66)");
    } else {
        x70 = b69;
    }
    return x70;
}
fn71(input_B3, input_S3, input_S1, input_I2, input_B1, input_I3, input_I1);
