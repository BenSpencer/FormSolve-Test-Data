// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str(not(bool(int((if false then not((int((bool(str((int(not(bool(input_string('S1')))) < input_int('I1')))) === input_bool('B3'))) in [0, 0, 85, 75])) else bool((input_int('I1') * int((not(bool((if (int(str(input_int('I1'))) > int(input_bool('B1'))) then "UMG" else input_string('S3')))) == ((input_int('I1') * int(input_string('S3'))) in [8, 0, 8, 0, 1, 42, 52, -92])))))))))))) then not(bool(input_string('S2'))) else input_bool('B3'))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn61 = function (x19, s1, s55, b23, b11, s29) {
    var b59 = b11;
    var x5 = x19;
    var e10 = "var b2 = Boolean(s1);var b3; if (b2) { b3 = false; } else { b3 = true; }var x4 = ~~(b3);var b6 = x4 < x5;var b9 = Boolean(String(b6));b9";
    var b12 = false;
    if (eval(e10) === b11) {
        b12 = true;
    }
    var opts16 = [0, 0, 85, 75];
    var b15 = opts16.indexOf(+(b12)) > -1;
    var x48;
    if (false) {
        x48 = !(b15);
    } else {
        var x20 = x19;
        var x33 = x20;
        var s34 = s29;
        var s21 = '' + (x20);
        var x24 = ~~ (b23);
        var b26 = Number(s21) > eval("x24");
        var e28 = "b26";
        var x30;
        if (eval(e28)) {
            x30 = "UMG";
        } else {
            x30 = s29;
        }
        var x35 = Number(s34);
        x36 = x33;
        x37 = x35;
        var opts39 = [8, 0, 8, 0, 1, 42, 52, -92];
        var b38 = opts39.indexOf(x36 * x37) > -1;
        var e41 = "b38";
        var b42 = !( !! (x30)) == eval(e41);
        var x44 = (b42) ? 1 : 0;
        x45 = x19;
        x46 = x44;
        var b47 = (x45 * x46) ? true : false;
        x48 = b47;
    }
    var b50 = (Number(x48)) ? true : false;
    var b51 = !(b50);
    var s52 = String(b51);
    var b53 = !! (s52);
    var b54;
    if (b53) {
        b54 = false;
    } else {
        b54 = true;
    }
    var x60;
    if (b54) {
        var b56 = !! (s55);
        var b58;
        if (eval("b56")) {
            b58 = false;
        } else {
            b58 = true;
        }
        x60 = b58;
    } else {
        x60 = b59;
    }
    return x60;
}
fn61(input_I1, input_S1, input_S2, input_B1, input_B3, input_S3);
